import { useTonConnectUI } from '@tonconnect/ui-react';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';

export default function FullWidthTonButton() {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = tonConnectUI.wallet;

  const handleConnect = () => {
    tonConnectUI.openModal();
  };

  const handleDisconnect = (e) => {
    e.stopPropagation();
    tonConnectUI.disconnect();
  };

  if (!wallet) {
    return (
      <button className="ton-connect-custom-button" onClick={handleConnect}>
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
        <div className="text-white-middle">
          {shortenAddress(wallet.account.address)}
        </div>
      </div>
      <button
        className="flex-center-style ton-connect-custom-button"
        style={{ width: 120, height: 40 }}
        onClick={handleDisconnect}
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
