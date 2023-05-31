import { Space, Spin } from 'antd';

export function Loading() {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <Spin tip="Loading" size="large" />
    </Space>
  );
}
