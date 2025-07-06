import { Card, Typography, Avatar } from 'antd';
import React from 'react';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';

export default function ListBlackCard({ user }) {
  return (
    <Card
      styles={{ body: { padding: 0, color: '#FFFFFF' } }}
      className="black-card-style"
      style={{ padding: 5 }}
      hoverable
    >
      <div className="flex-center-style">
        {/* Левый блок */}
        <div className="flex-center-style">
          <Avatar size={60} src={user.photo} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Typography.Text
              strong
              style={{ color: '#FFFFFF', fontSize: 15, lineHeight: 1.2 }}
            >
              {user.username}
            </Typography.Text>
            <Typography.Text
              type="secondary"
              style={{ color: '#FFFFFF', fontSize: 8, lineHeight: 1.2 }}
            >
              {'Opened ' + user.statisticCase + ' cases'}
            </Typography.Text>
          </div>
        </div>

        {/* Правый блок */}
        <div className="flex-center-style" style={{ marginLeft: 'auto' }}>
          <div className="black-card-mini-style">
            <Typography.Text strong style={{ color: '#FFFFFF' }}>
              {user.coinValue}
            </Typography.Text>
            <Avatar size="small" src={logo} />
          </div>
          <Typography.Text strong style={{ color: '#FFFFFF', marginRight: 10 }}>
            #{user.rank}
          </Typography.Text>
        </div>
      </div>
    </Card>
  );
}
