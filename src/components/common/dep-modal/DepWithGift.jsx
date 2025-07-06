import {
  Layout,
  Card,
  Typography,
  Space,
  Avatar,
  Segmented,
  ConfigProvider,
} from 'antd';

const DepWithGift = ({ setStatus, onClose, item }) => {
  return (
    <>
      <div className="ton-modal__header">
        <button
          className="ton-modal__close-btn"
          onClick={() => setStatus('main')}
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 10 10" fill="none">
            <path
              d="M6.5 2L3.5 5L6.5 8"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <h3 className="ton-modal__title">Deposit with Gift</h3>
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
      <div
        className="ton-modal__content"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '90%',
          padding: '0 20px',
        }}
      >
        <>
          <span className="text-grey" style={{ marginBottom: 15 }}>
            Gift prices
          </span>
        </>
        <Layout className="case-map-style">
          {item.inventory.map((inv) => (
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
      </div>
    </>
  );
};

export default DepWithGift;
