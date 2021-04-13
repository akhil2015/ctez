import { WalletContract } from '@taquito/taquito';
import BigNumber from 'bignumber.js';
import {
  CTezStorage,
  Depositor,
  depositors,
  EditDepositorOps,
  ErrorType,
  oven,
  Oven,
} from '../interfaces';
import { CTEZ_ADDRESS } from '../utils/globals';
import { logger } from '../utils/logger';
import { getLastOvenId, saveLastOven } from '../utils/ovenUtils';
import { getTezosInstance } from './client';
import { executeMethod, initContract } from './utils';

let cTez;

export const initCTez = async (address)  => {
  cTez = await initContract(address);
};

export const getCTez = () => {
  return cTez;
};

export const getCtezStorage = async () => {
  const storage = await cTez.storage();
  return storage;
};

export const create = async (
  userAddress,
  bakerAddress,
  op,
  allowedDepositors,
  amount = 0,
)=> {
  const newOvenId = getLastOvenId(userAddress, cTez.address) + 1;
  const hash = await executeMethod(
    cTez,
    'create',
    [newOvenId, bakerAddress, op, allowedDepositors],
    undefined,
    amount,
  );
  saveLastOven(userAddress, cTez.address, newOvenId);
  return hash;
};

export const delegate = async (ovenAddress, bakerAddress)=> {
  const ovenContract = await initContract(ovenAddress);
  const hash = await executeMethod(ovenContract, 'oven_delegate', [bakerAddress]);
  return hash;
};

export const editDepositor = async (
  ovenAddress,
  ops,
  enable,
  address,
) => {
  const ovenContract = await initContract(ovenAddress);
  const hash = await executeMethod(ovenContract, 'oven_edit_depositor', [
    ops,
    enable,
    address && address.trim().length > 1 ? address : undefined,
  ]);
  return hash;
};

export const deposit = async (ovenAddress, amount)=> {
  const ovenContract = await initContract(ovenAddress);
  const hash = await executeMethod(ovenContract, 'default', undefined, 0, amount);
  return hash;
};

export const withdraw = async (ovenId, amount, to) => {
  const hash = await executeMethod(cTez, 'withdraw', [
    ovenId,
    new BigNumber(amount).shiftedBy(6),
    to,
  ]);
  return hash;
};

export const liquidate = async (
  ovenId,
  overOwner,
  amount,
  to,
) => {
  const hash = await executeMethod(cTez, 'liquidate', [
    ovenId,
    overOwner,
    new BigNumber(amount).shiftedBy(6),
    to,
  ]);
  return hash;
};

export const mintOrBurn = async (ovenId, quantity) => {
  const hash = await executeMethod(cTez, 'mint_or_burn', [
    ovenId,
    new BigNumber(quantity).shiftedBy(6),
  ]);
  return hash;
};

export const getOvenDelegate = async (userOven) => {
  const tezos = getTezosInstance();
  const baker = await tezos.rpc.getDelegate(userOven.address);
  return baker;
};

export const prepareOvenCall = async (
  storage,
  ovenId,
  userAddress,
) => {
  const userOven = await storage.ovens.get({
    id: ovenId,
    owner: userAddress,
  });
  const baker = userOven ? await getOvenDelegate(userOven) : null;
  return { ...userOven, baker, ovenId };
};

export const getOvens = async (userAddress) => {
  try {
    if (!cTez && CTEZ_ADDRESS) {
      await initCTez(CTEZ_ADDRESS);
    }
    const lastOvenId = getLastOvenId(userAddress, cTez.address);
    const storage = await cTez.storage();
    const ovens= [];
    for (let i = lastOvenId; i > 0; i -= 1) {
      ovens.push(prepareOvenCall(storage, i, userAddress));
    }
    const allOvenData = await Promise.all(ovens);
    return allOvenData;
  } catch (error) {
    logger.error(error);
  }
};

export const getOvenDepositor = async (ovenAddress) => {
  const ovenContract = await initContract(ovenAddress);
  const ovenStorage = await ovenContract.storage();
  return ovenStorage.depositors;
};

export const cTezError = {
  0: 'OVEN ALREADY EXISTS',
  1: 'OVEN CAN ONLY BE CALLED FROM MAIN CONTRACT',
  2: 'CTEZ FA12 ADDRESS ALREADY SET',
  3: 'CFMM ADDRESS ALREADY SET',
  4: 'OVEN DOESNT EXIST',
  5: 'OVEN MISSING WITHDRAW ENTRYPOINT',
  6: 'OVEN MISSING DEPOSIT ENTRYPOINT',
  7: 'OVEN MISSING DELEGATE ENTRYPOINT',
  8: 'EXCESSIVE TEZ WITHDRAWAL',
  9: 'CTEZ FA12 CONTRACT MISSING MINT OR BURN ENTRYPOINT',
  10: 'CANNOT BURN MORE THAN OUTSTANDING AMOUNT OF CTEZ',
  11: 'OVEN NOT UNDERCOLLATERALIZED',
  12: 'EXCESSIVE CTEZ MINTING',
  13: 'CALLER MUST BE CFMM',
  1001: 'WITHDRAW CAN ONLY BE CALLED FROM MAIN CONTRACT',
  1002: 'ONLY OWNER CAN DELEGATE',
  1003: 'CANNOT FIND REGISTER DEPOSIT ENTRYPOINT',
  1004: 'UNAUTHORIZED DEPOSITOR',
  1005: 'SET ANY OFF FIRST',
  1006: 'ONLY OWNER CAN EDIT DEPOSITORS',
};