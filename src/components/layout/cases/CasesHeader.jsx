import { Layout, Avatar, Space, Button, Flex, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';
import { TonConnectButton } from '@tonconnect/ui-react';

const headerStyle = {
  color: '#ffffff',
  height: 60,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#141415',
  marginBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

const header = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const headerText = {
  fontWeight: 500,
};

export default function CasesHeader({ tg, profile }) {
  const { pathname } = useLocation();

  const LinkItem = ({ value, children }) => (
    <RouterLink to={value} style={{ color: '#fff' }}>
      {children}
    </RouterLink>
  );

  return (
    <Layout.Header style={headerStyle}>
      <LinkItem value="/soldax/profile">
        <div style={header}>
          <Space wrap size={16}>
            <Avatar size="large" shape="circle" gap="5" src={tg.photo_url} />
          </Space>
          <span style={headerText}>{tg.first_name}</span>
        </div>
      </LinkItem>

      <div style={header}>
        <TonConnectButton style={{ width: 110 }} />
        <LinkItem value="/soldax/profile">
          <span style={headerText}>{profile.balance}</span>
          <Space wrap size={16} style={{ marginLeft: 15 }}>
            <Avatar size="small" shape="circle" gap="5" src={logo} />
          </Space>
        </LinkItem>
      </div>
    </Layout.Header>
  );
}
