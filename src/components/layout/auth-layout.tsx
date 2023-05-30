"use client";
import { Card, Layout, Space } from "antd";
import "./auth-layout.style.scss";

const { Content } = Layout;

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Space className="authLayout" direction="vertical" size="large">
      <img src="/images/weedoit.svg" alt="WEEDO.it" />
      <Card className="">{children}</Card>
    </Space>
  );
}
