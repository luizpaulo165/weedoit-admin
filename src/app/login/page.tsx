'use client';
import React from 'react';
import AuthLayout from '@/components/layout/auth-layout';
import { Button, Divider, Form, Input } from 'antd';

export default function Login() {
  return (
    <AuthLayout>
      <Form name="loginForm" layout="vertical">
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Por favor, insira o login!' }]}
        >
          <Input addonBefore="Login" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Por favor, insira a senha!' }]}
        >
          <Input.Password addonBefore="Senha" />
        </Form.Item>

        <Divider />

        <Form.Item className="no-margin-bottom">
          <Button type="primary" htmlType="submit" block>
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
}
