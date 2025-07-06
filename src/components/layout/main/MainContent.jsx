import { Layout } from 'antd';
import BlockForModalSmall from '../../common/block-for-main/BlockForMainSmall';
import BlockForModalMidle from '../../common/block-for-main/BlockForMainMidle';
import BlockForMainLarge from '../../common/block-for-main/BlockForMainLarge';

export default function CasesContent({ tg, profile, cases }) {
  return (
    <Layout.Content className="body-content-style">
      <Layout className="case-map-style">
        <BlockForModalSmall
          title="Give a ways"
          className="blue-card-style-modal"
        />
        <BlockForModalSmall
          title="Follow the promotions!"
          className="green-card-style-modal"
        />
        <div className="flex-space-between-style" style={{ padding: '0' }}>
          <BlockForModalMidle
            title="Cases"
            className="blue-card-style-modal"
            img="./src/assets/images/img/12333.png"
          />
          <BlockForModalMidle
            title="Upgrade"
            className="green-card-style-modal"
          />
        </div>
        <BlockForMainLarge
          title="Coming soon"
          className="blue-card-style-modal"
        />
      </Layout>
    </Layout.Content>
  );
}
