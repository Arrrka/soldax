import { useEffect, useState } from 'react';
import { connector } from '../utils/ton-connect';

export const useTonConnect = () => {
  const [connected, setConnected] = useState(false);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const unsubscribe = connector.onStatusChange((wallet) => {
      setConnected(!!wallet);
      setWallet(wallet);
    });

    return () => unsubscribe();
  }, []);

  const connect = async () => {
    const wallets = await connector.getWallets();
    const walletConnectionSource = {
      jsBridgeKey: wallets[0].jsBridgeKey,
    };
    connector.connect(walletConnectionSource);
  };

  const disconnect = () => connector.disconnect();

  return { connect, disconnect, connected, wallet };
};
