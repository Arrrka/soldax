import { Card, Typography, Avatar } from 'antd';
import logo from '@/assets/images/ton_logo_pack/ton_logo_pack/ton_symbol.svg';

export default function BlockForModal({
  title,
  bal,
  className,
  classNameMini,
}) {
  return (
    <Card
      styles={{ body: { padding: 0 } }}
      className={className}
      style={{ padding: 5 }}
      hoverable
    >
      <div className="flex-center-style">
        {/* Левый блок */}
        <div className="flex-center-style" style={{ padding: '0 20px' }}>
          <Typography.Text
            strong
            style={{
              color: '#FFFFFF',
              fontSize: 15,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography.Text>
        </div>

        {/* Правый блок */}
        <div className="flex-center-style" style={{ marginLeft: 'auto' }}>
          <div className={classNameMini}>
            <Typography.Text strong style={{ color: '#FFFFFF' }}>
              {bal}
            </Typography.Text>
            <Avatar size="small" src={logo} />
          </div>
        </div>
      </div>
    </Card>
  );
}
