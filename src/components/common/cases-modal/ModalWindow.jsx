import '../../../styles/base/App.css';
import { Layout, Card, Space, Avatar, Segmented, ConfigProvider } from 'antd';
import BlockForModal from './BlockForModal';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';
import CaseRoulette from '../Spin/CaseRoulette';
import { fakeFatchCase } from '../../../api';
import { useEffect, useState } from 'react';

const ModalWindow = ({ isOpen, onClose, cardData, item }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function preload() {
      const result = await fakeFatchCase();
      setUsers(result.sort((a, b) => a.rank - b.rank));
    }
    preload();
  }, []);

  const [winnerItem, setWinnerItem] = useState(null);
  const [triggerSpin, setTriggerSpin] = useState(false);

  const handleSpinClick = () => {
    if (!users.length) return;
    const randomWinner = users[Math.floor(Math.random() * users.length)];
    setWinnerItem(randomWinner);
    setTriggerSpin((prev) => !prev); // меняем значение чтобы запустить useEffect
  };

  return (
    <div className="ton-modal__backdrop" onClick={handleBackdropClick}>
      <div className="ton-modal__container">
        <div className="ton-modal__window">
          <div className="ton-modal__header">
            <h3 className="ton-modal__title">{cardData.name}</h3>
            <button
              className="ton-modal__close-btn"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="ton-modal__content">
            <CaseRoulette
              items={users}
              winnerItem={winnerItem}
              triggerSpin={triggerSpin}
            />
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {
                    // Ant Design 5+ Component Tokens
                    itemColor: '#333',
                    itemHoverColor: '#1890ff',
                    itemSelectedBg: '#1890ff',
                    itemSelectedColor: '#fff',
                    borderRadius: 6,
                  },
                },
              }}
            >
              <Segmented
                className="segmented-black-modal"
                options={['x1', 'x2', 'x3']}
                styles={{ itemActiveBg: '#0486ff' }}
                block
              />
            </ConfigProvider>
            <button
              onClick={handleSpinClick}
              style={{
                background: 'transparent',
                width: '100%',
                borderColor: 'transparent',
                padding: 0,
              }}
            >
              <BlockForModal
                title="Spin"
                bal="0,50"
                className="blue-card-style-modal"
                classNameMini="blue-card-mini-modal"
              />
            </button>

            <BlockForModal
              title="Quick Spin"
              bal="0,50"
              className="green-card-style-modal"
              classNameMini="green-card-mini-modal"
            />
            <span
              className="text-grey flex-space-between-style"
              style={{ fontWeight: 'normal' }}
            >
              Possible award
            </span>
            <Layout className="case-map-style">
              {cardData.items.map((gif) => (
                <Card
                  key={gif.giftName}
                  hoverable
                  className="case-card-style"
                  style={{
                    backgroundImage: `url(${gif.icon})`,
                    background: '#1f1f20',
                    borderRadius: 15,
                    height: 120,
                    width: 120,
                    justifyContent: 'flex-start',
                  }}
                  styles={{ body: { padding: 0, flex: 0 } }}
                >
                  <div className="blue-card-mini-second-style">
                    <Space wrap size={16} style={{ marginLeft: 5 }}>
                      <Avatar size="small" shape="circle" gap="5" src={logo} />
                    </Space>
                    <span>0.00</span>
                  </div>
                </Card>
              ))}
            </Layout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
