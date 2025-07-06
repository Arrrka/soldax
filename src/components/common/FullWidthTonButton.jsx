import { useTonWallet } from '@/hooks/useTonWallet';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';

export default function FullWidthTonButton() {
  const { isConnected, walletAddress, connect, disconnect } = useTonWallet();

  const handleConnectClick = () => {
    if (!isConnected) {
      connect();
    }
  };

  const handleDisconnectClick = (e) => {
    e.stopPropagation();
    disconnect();
  };

  if (!isConnected) {
    return (
      <button
        className="ton-connect-custom-button"
        onClick={handleConnectClick}
      >
        <span className="ton-connect-icon">
          <img src={logo} alt="TON Logo" width={20} height={20} />
        </span>
        Connect TON Wallet
      </button>
    );
  }

  return (
    <div className="ton-disconected-custom-block flex-space-between-style">
      <div className="flex-center-style flex-column-content-style">
        <div className="text-grey">User address:</div>
        <div className="text-white-middle">{shortenAddress(walletAddress)}</div>
      </div>
      <button
        className="flex-center-style ton-connect-custom-button"
        style={{ width: 120, height: 40 }}
        onClick={handleDisconnectClick}
      >
        Disconnect
      </button>
    </div>
  );
}

// Функция для сокращения адреса
function shortenAddress(address) {
  if (!address) return '';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}
