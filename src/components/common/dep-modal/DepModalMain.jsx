import { Card, Typography } from 'antd';

const DepModalMain = ({ setStatus, onClose }) => {
  return (
    <>
      <div className="ton-modal__header" style={{ justifyContent: 'center' }}>
        <h3 className="ton-modal__title" style={{ position: 'fixed' }}>
          Deposit
        </h3>
        <button
          className="ton-modal__close-btn"
          onClick={onClose}
          aria-label="Close"
          style={{ marginLeft: 'auto' }}
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
          <span className="text-grey">Select the method of Deposit</span>
        </>
        <div className="flex-space-between-modal-style">
          <Card
            styles={{ body: { padding: 0 } }}
            className="blue-card-dep-style-modal"
            style={{ padding: 5 }}
            hoverable
            onClick={() => setStatus('ton')}
          >
            <Typography.Text strong style={{ color: '#FFFFFF' }}>
              Deposit With Ton
            </Typography.Text>
          </Card>

          <Card
            styles={{ body: { padding: 0 } }}
            className="green-card-dep-style-modal"
            style={{ padding: 5 }}
            hoverable
            onClick={() => setStatus('gift')}
          >
            <Typography.Text strong style={{ color: '#FFFFFF' }}>
              Deposit With Gift
            </Typography.Text>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DepModalMain;
