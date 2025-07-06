import { Card, Typography, ConfigProvider, Input } from 'antd';

const DepWithTon = ({ setStatus, onClose }) => {
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
        <h3 className="ton-modal__title">TON Deposit</h3>
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
          <span className="text-grey">Enter the amount to deposit</span>
        </>
        <div
          className="flex-space-between-modal-style"
          style={{ flexDirection: 'column', justifyContent: 'center' }}
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#0066cc',
                colorBgContainer: '#141415',
                colorText: '#fff',
                colorBorder: '#a2a2a8',
                colorTextPlaceholder: '#a2a2a8',
              },
            }}
          >
            <Input
              size="large"
              placeholder="Enter amount"
              suffix={<div className="ton-icon" />}
              style={{ marginBottom: 20 }}
            />
          </ConfigProvider>
          <Card
            styles={{ body: { padding: 10 } }}
            className="blue-card-style-modal"
            hoverable
          >
            <Typography.Text
              strong
              style={{
                color: '#FFFFFF',
                fontSize: 15,
                lineHeight: 1.2,
              }}
            >
              Deposit
            </Typography.Text>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DepWithTon;
