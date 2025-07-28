import { Card, Typography, ConfigProvider, Input } from 'antd';
export default function PromoButton() {
  return (
    <div className="ton-connect-custom-button">
      Enter Promocode:
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
    </div>
  );
}
