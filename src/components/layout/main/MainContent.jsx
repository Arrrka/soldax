import { Layout } from 'antd';
import BlockForModalSmall from '../../common/block-for-main/BlockForMainSmall';
import BlockForModalMidle from '../../common/block-for-main/BlockForMainMidle';
import BlockForMainLarge from '../../common/block-for-main/BlockForMainLarge';
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
        <BlockForModalSmall
          title="Give a ways"
          className="blue-card-style-modal"
          onClick={() => showModal(cases)}
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
        />
      </Layout>
      <ModalWindow
        cardData={isModalOpen.currentItem}
        isOpen={isModalOpen.isOpen}
        onOk={handleOk}
        onClose={handleCancel}
        item={''}
      />
    </Layout.Content>
  );
}
