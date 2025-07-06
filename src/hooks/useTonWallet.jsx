import { useTonConnectUI } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';

export function useTonWallet() {
  const [tonConnectUI] = useTonConnectUI();
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    if (tonConnectUI.wallet) {
      setIsConnected(true);
      setWalletAddress(tonConnectUI.wallet.account.address);
      setWallet(tonConnectUI.wallet);
    } else {
      setIsConnected(false);
      setWalletAddress(null);
      setWallet(null);
    }
  }, [tonConnectUI.wallet]);

  return {
    isConnected,
    walletAddress,
    wallet,
    connect: tonConnectUI.openModal,
    disconnect: tonConnectUI.disconnect,
  };
}
