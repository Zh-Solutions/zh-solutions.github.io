import * as React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Profile, IProfile } from './Profile';
import 'antd/dist/antd.css'
import './App.css'

const { Header, Footer, Content } = Layout;

const kiril: IProfile = {
  name: "Кирил Желязков",
  photo: "https://scontent.fsof1-2.fna.fbcdn.net/v/t1.0-9/69005557_2836223253073018_2889484908181323776_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_oc=AQl5vaKUre-IwbI58uSb4tmqeUCcIA5wBE83q4Y09pbd4TaXTocHz2-8kWr8up2dsik&_nc_ht=scontent.fsof1-2.fna&oh=8c184332502f84defdb39c62309b6379&oe=5EEB31C2"
}

const stefan: IProfile = {
  name: "Стефан Желязков",
  photo: "https://stefan-zh.github.io/images/photo.jpg"
}

export const App = () => (
  <Layout>
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        <Menu.Item key="0">
          ZH Solutions
        </Menu.Item>
      </Menu>
    </Header>
    <Content className="content">
      <Row gutter={16}>
        <Col span={12} style={{textAlign: "right"}}>
          <Profile {...kiril} />
        </Col>
        <Col span={12} style={{textAlign: "left"}}>
          <Profile {...stefan} />
        </Col>
      </Row>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
)
