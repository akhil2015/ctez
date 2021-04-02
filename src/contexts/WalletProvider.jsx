import * as React from 'react'

import {
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react'

import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";
import * as move_decimal from'move-decimal-point';

const UseWalletContext = React.createContext(null)

function useWallet() {
  const walletContext = useContext(UseWalletContext)

  if (walletContext === null) {
    throw new Error(
      'useWallet() can only be used inside of <UseWalletProvider />, ' +
        'please declare it at a higher level.'
    )
  }

  const { wallet } = walletContext

  return useMemo(() => {
    return { ...wallet }
  }, [wallet])
}

function UseWalletProvider({
    children
  }) {
    const walletContext = useContext(UseWalletContext)

    if (walletContext !== null) {
      throw new Error('<UseWalletProvider /> has already been declared.')
    }

    const [error, setError] = useState(null)
    const [status, setStatus] = useState('disconnected')
    const [tzAddress, settzAddress] = useState(null)
    const [balance,setBalance] = useState(0)
    const [proxyContract, setProxyContract] = useState(null);
    const [nftContract, setNftContract] = useState(null);
    const [tezos, setTezos] = useState(null);
    const network = "edonet"
    // const updateBalance = async () =>{
    //   const Tezos = new TezosToolkit("https://testnet-tezos.giganode.io/");
    //   if(tzAddress!=null){
    //     const balance = await Tezos.tz.getBalance(tzAddress);
    //     return balance
    //   }
    //   return 
    // }
    const connect = useCallback(
      async () => {
          try {
            const options = {
              name: "Ctez DApp",
              iconUrl: "https://avatars0.githubusercontent.com/u/50363773?s=60&v=4",
              preferredNetwork: network,
            };
            const beaconWallet = new BeaconWallet(options);
            await beaconWallet.requestPermissions({
                network: {
                  type: network,
                },
              });
            setStatus('connected');

            const tzAddress = await beaconWallet.getPKH();
            settzAddress(tzAddress);

            const Tezos = new TezosToolkit("https://testnet-tezos.giganode.io/");
            if(tzAddress!=null){
              const bal = await Tezos.tz.getBalance(tzAddress);
              let balString = bal.toString()
              balString = move_decimal(balString,-6)
              setBalance(balString)
            }
            // Get contract
            Tezos.setWalletProvider(beaconWallet);
            setTezos(Tezos);

            const contract = await Tezos.wallet.at("KT1N2mR8dGDrY6bJyc24DDznHYEHctAvDfR4");
            setProxyContract(contract);

            const nftContract = await Tezos.wallet.at("KT1Q8FzFVyJSi7s3RxtAT5CFvgBt69xtGkaq");
            setNftContract(nftContract);
          } catch (error) {
              setError(error);
          }
      },
      [network]
    )

    const wallet = useMemo(
      () => ({
        connect,
        tezos,
        tzAddress,
        balance,
        proxyContract,
        nftContract,
        error,
        status,
      }),
      [
        connect,
        tezos,
        tzAddress,
        balance,
        proxyContract,
        nftContract,
        error,
        status,
      ]
    )

    return (
      <UseWalletContext.Provider
        value={{
          wallet,
        }}
      >
        {children}
      </UseWalletContext.Provider>
    )
  }

function UseWalletProviderWrapper(props) {
    return (
        <UseWalletProvider {...props}/>
    )
  }

  export const withWallet = (Component) => {
    return (props) => {
      const wallet = useWallet();
  
      return <Component wallet={wallet} {...props} />;
    };
  };

  export {UseWalletProviderWrapper as UseWalletProvider, useWallet}