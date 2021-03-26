import {
  TezosWalletUtil,
  TezosNodeWriter,
  TezosConseilClient,
} from "conseiljs";
import { conseilServer, tezosServer } from "./server";
const { unlockFundraiserIdentity } = TezosWalletUtil;
const { getAccount } = TezosConseilClient;
const { isManagerKeyRevealedForAccount } = TezosNodeWriter;

export const unlockFundraiser = async (mnemonic, email, password, pkh) => {
  const identity = await unlockFundraiserIdentity(
    mnemonic,
    email.trim(),
    password.trim(),
    pkh.trim()
  );
  return identity;
};

//getAccount

export const getAccountDetails = async (pkh) => {
  const account = await getAccount(conseilServer, "alphanet", pkh);
  return account;
};

// Fill in the details to getRevealResults yourself. This function should
// call isManagerKeyRevealedForAccount with 2 parameters; Tezos Server URL and KeyStore
export const getRevealResults = async (keyStore) => {
  const results = await isManagerKeyRevealedForAccount(
    tezosServer.url,
    keyStore
  );
  return results;
};
