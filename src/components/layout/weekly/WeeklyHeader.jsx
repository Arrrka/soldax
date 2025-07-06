import { Layout, Avatar, Space, Button, Flex, Modal } from 'antd';

const headerStyle = {
  color: '#ffffff',
  height: 60,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#141415',
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};

export default function WeeklyHeader() {
  return (
    <Layout.Header style={headerStyle}>
      <span style={{ fontSize: 24, lineHeight: 1.2 }}>Weekly</span>
    </Layout.Header>
  );
}
