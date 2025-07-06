import { Layout, Avatar, Space, Card, Spin } from 'antd';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useState } from 'react';
import DepModal from '../../common/dep-modal/DepModal';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';

function FullWidthTonButton() {
  const [tonConnectUI] = useTonConnectUI();
  const handleConnect = () => {
    tonConnectUI.openModal(); // Открывает модалку выбора кошелька
  };
  return (
    <button className="ton-connect-custom-button" onClick={handleConnect}>
      <span className="ton-connect-icon">
        <img src={logo} alt="TON Logo" width={20} height={20} />
      </span>
      Connect TON Wallet
    </button>
  );
}

export default function ProfileContent({ tg, profile }) {
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
  });

  const showModal = () => {
    setIsModalOpen({
      isOpen: true,
    });
  };

  const handleOk = () => {
    setIsModalOpen({ ...isModalOpen, isOpen: false });
  };

  const handleCancel = () => {
    setIsModalOpen({ ...isModalOpen, isOpen: false });
  };
  return (
    <Layout.Content>
      <Layout
        style={{
          background: 'transparent',
          marginTop: '1rem',
        }}
        className="body-content-style"
      >
        <Space wrap size={16} className="big-user-photo-style">
          <Avatar size={110} shape="circle" src={tg?.photo_url || logo} />
        </Space>
        <div className="flex-space-between-style">
          <span
            className="flex-center-style text-white-large"
            style={{ textAlign: 'left' }}
          >
            {tg?.first_name + ' ' + tg?.last_name}
          </span>
          <span
            style={{
              width: '120px',
            }}
            className="flex-space-between-style black-card-style flex-center-style"
          >
            #{tg?.id}
          </span>
        </div>

        <div
          style={{ height: 100, marginBottom: 15 }}
          className="black-card-style flex-space-between-style"
        >
          <div className="flex-center-style flex-column-content-style">
            <span className="text-grey">Balance</span>
            <div style={{ flexDirection: 'row' }} className="flex-center-style">
              <span className="text-white-middle">{profile.balance}</span>
              <Space wrap size={16}>
                <Avatar size="small" shape="circle" gap="5" src={logo} />
              </Space>
            </div>
          </div>
          <div className="flex-center-style">
            <button
              className="ton-connect-custom-button"
              style={{ width: 120, height: 40 }}
              onClick={() => showModal()}
            >
              Deposit
            </button>
          </div>
        </div>
        <FullWidthTonButton />
        <div className="flex-space-between-style">
          <span>Inventory:</span>
          <button
            className="ton-connect-custom-button"
            style={{ width: 120, height: 15, fontSize: 15 }}
          >
            Show all
          </button>
        </div>
        <Layout className="case-map-style">
          {profile.inventory.map((inv) => (
            <Card
              key={inv.id}
              hoverable
              onClick={() => showModal(inv.name)}
              className="case-card-style"
              style={{
                backgroundImage: `url(${inv.imageUrl})`,
                borderRadius: 15,
              }}
              styles={{ body: { padding: 0 } }}
            ></Card>
          ))}
        </Layout>
      </Layout>
      <DepModal
        isOpen={isModalOpen.isOpen}
        onOk={handleOk}
        onClose={handleCancel}
        item={profile}
      />
    </Layout.Content>
  );
}
