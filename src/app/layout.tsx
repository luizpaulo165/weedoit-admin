'use client';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/pt_BR';
import '../components/styles/global.style.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <title>WEEDO.it</title>
      </head>
      <body>
        <ConfigProvider
          locale={locale}
          theme={{
            token: {
              colorPrimary: '#4cc5d2',
              colorLink: '#4cc5d2',
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
