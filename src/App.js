import React from "react";
import { ProductTable } from "./components/ProductTable";
import { Layout } from "antd";
import { Menu } from "antd";

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Hardware Search</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <ProductTable />
      </Content>
    </Layout>
  );
};

export default App;
