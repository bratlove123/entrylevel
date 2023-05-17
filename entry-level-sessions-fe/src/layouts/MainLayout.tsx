import { FC, ReactNode } from 'react';
import { Layout } from 'antd';
import { AppHeader } from '../components/Header/Header';
const { Footer, Content } = Layout;

interface Prop {
  children: ReactNode;
}

export const MainLayout: FC<Prop> = ({ children }) => {
  return (
    <Layout>
      <AppHeader></AppHeader>
      <Layout>
        <Content>{children}</Content>
      </Layout>
      <Footer>2023 - Home Assignments</Footer>
    </Layout>
  );
};
