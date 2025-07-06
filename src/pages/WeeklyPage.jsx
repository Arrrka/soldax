import { Layout, Spin } from 'antd';
import WeeklyContent from '../components/layout/weekly/WeeklyContent';
import WeeklyHeader from '../components/layout/weekly/WeeklyHeader';
import {
  useTgUser,
  useProfileMe,
  useMultiApiCheck,
} from '../api-requests/api-get/indexApi';

export default function WeeklyPage() {
  // const tgData = useTgUser();
  // const profileData = useProfileMe();
  // const { status, error, data } = useMultiApiCheck([tgData, profileData]);

  // if (status === 'loading') return <Spin fullscreen />;
  // if (status === 'error') return <div>Warning: {error}</div>;
  // if (status === 'no-data') return <div>No data</div>;

  // const [tg = {}, profile = {}] = data || [];
  return (
    <Layout style={{ backgroundColor: '#141415' }}>
      <WeeklyHeader />
      <Layout style={{ backgroundColor: '#141415' }}>
        <WeeklyContent />
      </Layout>
    </Layout>
  );
}
