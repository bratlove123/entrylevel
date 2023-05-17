import { ListSession } from '../../modules/ListSession/ListSession';
import { HomeStyled } from './index.styled';

export const Home = () => {
  return (
    <HomeStyled>
      <div className="page-container">
        <ListSession></ListSession>
      </div>
    </HomeStyled>
  );
};
