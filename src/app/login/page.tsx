"use client";
import React from "react";
import AuthLayout from "@/components/layout/auth-layout";
import { Button, Form, Input } from "antd";

export default function Login() {
  return (
    <AuthLayout>
      <Form name="loginForm" layout="vertical">
        <Form.Item
          label="Login"
          name="username"
          rules={[{ required: true, message: "Por favor, insira o login!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="password"
          rules={[{ required: true, message: "Por favor, insira a senha!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  );
}
