import { Layout, Spin } from 'antd';
import ListBlackCard from '../../common/ListBlackCard';
import TelegramUserBlackCard from '../../common/TelegramUserBlackCard';
import { useEffect, useState } from 'react';
import { fakeFatchUsers } from '../../../api';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';

export default function WeeklyContent({ tg, profile }) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function preload() {
      const result = await fakeFatchUsers();
      const sortedUsers = result
        .map((res) => ({ ...res }))
        .sort((a, b) => a.rank - b.rank);
      setUsers(sortedUsers);
      setLoading(false);
    }
    preload();
  }, []);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout.Content>
      <Layout className="body-content-style">
        {users.map((user) => (
          <ListBlackCard key={user.id} user={user} />
        ))}
      </Layout>
      <TelegramUserBlackCard
        key={tg?.id || '123'}
        user={tg?.first_name || 'first'}
        bal={profile?.balance || '0.00'}
        src={tg?.photo_url || logo}
      />
    </Layout.Content>
  );
}
