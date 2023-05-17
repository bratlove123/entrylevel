import { HeaderStyled } from './Header.styled';
import { Layout } from 'antd';
const { Header } = Layout;

export const AppHeader = () => {
  return (
    <HeaderStyled>
      <Header>
        <h1>Entry Level Test - Sessions Management</h1>
      </Header>
    </HeaderStyled>
  );
};
