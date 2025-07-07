import { useTonConnectUI } from '@tonconnect/ui-react';
import { useEffect, useState } from 'react';

export function useTonWallet() {
  const tonConnectUI = useTonConnectUI();
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

  const connect = () => {
    if (tonConnectUI?.modal) {
      tonConnectUI.openModal();
    } else {
      console.warn('TonConnect UI не готов для открытия модалки');
    }
  };

  const disconnect = () => {
    if (tonConnectUI) {
      tonConnectUI.disconnect();
    } else {
      console.warn('TonConnect UI не готов для дисконнекта');
    }
  };

  return {
    isConnected,
    walletAddress,
    wallet,
    connect,
    disconnect,
  };
}
