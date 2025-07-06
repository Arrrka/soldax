import { Layout, Spin } from 'antd';
import CasesHeader from '../components/layout/cases/CasesHeader';
import CasesContent from '../components/layout/cases/CasesContent';
import {
  useTgUser,
  useProfileMe,
  useMultiApiCheck,
  useCases,
} from '../api-requests/api-get/indexApi';

export default function CasesPage() {
  const tgData = useTgUser();
  const profileData = useProfileMe();
  const casesData = useCases();
  const { status, error, data } = useMultiApiCheck([
    tgData,
    profileData,
    casesData,
  ]);

  if (status === 'loading') return <Spin fullscreen />;
  if (status === 'error') return <div>Warning: {error}</div>;
  if (status === 'no-data') return <div>No data</div>;

  const [tg = {}, profile = {}, cases = {}] = data || [];
  return (
    <Layout style={{ backgroundColor: '#141415' }}>
      <CasesHeader tg={tg} profile={profile} />
      <Layout style={{ backgroundColor: '#141415' }}>
        <CasesContent tg={tg} profile={profile} cases={cases} />
      </Layout>
    </Layout>
  );
}
