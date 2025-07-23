import BlockForModalSmall from '../../common/block-for-main/BlockForMainSmall';
import BlockForModalMidle from '../../common/block-for-main/BlockForMainMidle';
import BlockForMainLarge from '../../common/block-for-main/BlockForMainLarge';
import '../../../styles/base/App.css';
import { Layout, Card, Space, Avatar, Segmented, ConfigProvider } from 'antd';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';
import CaseRoulette from '../../common/Spin/CaseRoulette';
import { fakeFatchCase } from '../../../api';
import { useEffect, useState } from 'react';

export default function CasesContent({ tg, profile, cases }) {
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
    <Layout.Content className="body-content-style">
      <Layout className="case-map-style">
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

        {/* <BlockForModalSmall
          title="Give a ways"
          className="blue-card-style-modal"
        />
        <BlockForModalSmall
          title="Follow the promotions!"
          className="green-card-style-modal"
        />
        <div className="flex-space-between-style" style={{ padding: '0' }}>
          <BlockForModalMidle
            title="Cases"
            className="blue-card-style-modal"
            img="./src/assets/images/img/12333.png"
          />
          <BlockForModalMidle
            title="Upgrade"
            className="green-card-style-modal"
          />
        </div>
        <BlockForMainLarge
          title="Coming soon"
          className="blue-card-style-modal"
        /> */}
      </Layout>
    </Layout.Content>
  );
}
