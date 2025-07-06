import { Layout, Spin } from 'antd';
import ProfileContent from '../components/layout/profile/ProfileContent';

// import {
//   useTgUser,
//   useProfileMe,
//   useMultiApiCheck,
// } from '../api-requests/api-get/indexApi';

export default function ProfilePage() {
  // const tgData = useTgUser();
  // const profileData = useProfileMe();
  // const { status, error, data } = useMultiApiCheck([tgData, profileData]);

  // if (status === 'loading') return <Spin fullscreen />;
  // if (status === 'error') return <div>Warning: {error}</div>;
  // if (status === 'no-data') return <div>No data</div>;

  // const [tg = {}, profile = {}] = data || [];
  return (
    <Layout style={{ backgroundColor: '#141415' }}>
      <Layout style={{ backgroundColor: '#141415' }}>
        <ProfileContent />
      </Layout>
    </Layout>
  );
}
