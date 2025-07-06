import { Layout, Card, Space, Avatar } from 'antd';
import { useState } from 'react';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';
import ModalWindow from '../../common/cases-modal/ModalWindow';

export default function CasesContent({ tg, profile, cases }) {
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    currentItem: null,
  });

  const showModal = (item) => {
    setIsModalOpen({
      isOpen: true,
      currentItem: item,
    });
  };

  const handleOk = () => {
    setIsModalOpen({ ...isModalOpen, isOpen: false });
  };

  const handleCancel = () => {
    setIsModalOpen({ ...isModalOpen, isOpen: false });
  };

  return (
    <Layout.Content className="body-content-style">
      <Layout className="case-map-style">
        {cases.map((cas) => (
          <Card
            key={cas.id}
            hoverable
            onClick={() => showModal(cas)}
            className="case-card-style"
            style={{ backgroundImage: `url(${cas.icon})`, borderRadius: 15 }}
            styles={{ body: { padding: 0, flex: 0 } }}
          >
            <div className="case-card-price-style">
              {cas.priceTon}
              <Space wrap size={16} style={{ marginLeft: 5 }}>
                <Avatar size="small" shape="circle" gap="5" src={logo} />
              </Space>
            </div>
          </Card>
        ))}
      </Layout>
      <ModalWindow
        cardData={isModalOpen.currentItem}
        isOpen={isModalOpen.isOpen}
        onOk={handleOk}
        onClose={handleCancel}
        item={cases}
      />
    </Layout.Content>
  );
}
