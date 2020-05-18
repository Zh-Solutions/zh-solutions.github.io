import * as React from 'react';
import { Layout, Menu, Typography } from 'antd';
import 'antd/dist/antd.css'

const { Header, Footer, Content } = Layout;

export const App = () => (
  <Layout style={{ height: '100vh' }}>
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="0">
          ZH Solutions
        </Menu.Item>
      </Menu>
    </Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
)
