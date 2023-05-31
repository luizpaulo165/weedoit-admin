'use client';
import { Card, Layout, Space } from 'antd';
import './auth-layout.style.scss';
import { useEffect, useState } from 'react';
import { Loading } from '../loading/loading';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Space className="authLayout" direction="vertical" size="small">
          <Card className="content">
            <img src="/images/weedoit_ballow.svg" alt="WEEDO.it" className="logo" />
            {children}
          </Card>
        </Space>
      )}
    </>
  );
}
