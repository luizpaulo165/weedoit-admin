'use client';
import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Affix, Typography, Card, Layout, Menu, Divider } from 'antd';
import './internal-layout.style.scss';
import { Loading } from '../loading/loading';
import Link from 'next/link';

const { Content, Sider } = Layout;

const { Title } = Typography;

interface InternalLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const items: MenuProps['items'] = [
  {
    key: 'users',
    icon: <UserOutlined />,
    label: (
      <>
        <Link href="/users">Usuários</Link>
      </>
    ),
  },
  {
    key: 'services',
    icon: <UserOutlined />,
    label: (
      <>
        <Link href="/services">Serviços</Link>
      </>
    ),
  },
  {
    key: 'clients',
    icon: <UserOutlined />,
    label: (
      <>
        <Link href="/clients">Nossos clientes</Link>
      </>
    ),
  },
  {
    key: 'equip',
    icon: <UserOutlined />,
    label: (
      <>
        <Link href="/equip">Equipe</Link>
      </>
    ),
  },
  {
    key: 'general',
    icon: <UserOutlined />,
    label: (
      <>
        <Link href="/general">Geral</Link>
      </>
    ),
  },
];

export default function InternalLayout({ children, title }: InternalLayoutProps) {
  const [loading, setLoading] = useState(true);
  const [top, setTop] = useState(10);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout className="internalLayout">
          <Content className="content">
            <Layout>
              <Affix offsetTop={top}>
                <Sider className="aside">
                  <div className="logo">
                    <img src="/images/weedoit.svg" alt="WEEDO.it" />
                  </div>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                    items={items}
                  />
                </Sider>
              </Affix>
              <Content style={{ padding: '0 24px' }}>
                {title ? (
                  <>
                    <Title level={3} className="titlePage">
                      {title}
                    </Title>
                    <Divider />
                  </>
                ) : null}

                <Card>{children}</Card>
              </Content>
            </Layout>
          </Content>
        </Layout>
      )}
    </>
  );
}
