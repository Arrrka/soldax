import { Card, Typography } from 'antd';

export default function BlockForModal({ title, className }) {
  return (
    <Card
      styles={{ body: { padding: 0 } }}
      className={className}
      style={{ padding: 5, borderRadius: 10 }}
      hoverable
    >
      <div className="flex-center-style">
        <div
          className="flex-center-style"
          style={{ padding: '0 20px', height: 40 }}
        >
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
      </div>
    </Card>
  );
}
