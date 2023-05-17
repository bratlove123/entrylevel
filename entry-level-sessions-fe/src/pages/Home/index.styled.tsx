import styled from 'styled-components';

export const HomeStyled = styled.div`
  .page-container {
    padding: 50px 400px;
    background: #ddd;
  }

  @media screen and (max-width: 1440px) {
    .page-container {
      padding: 30px 150px;
    }
  }

  @media screen and (max-width: 1280px) {
    .page-container {
      padding: 30px;
    }
  }

  @media screen and (max-width: 992px) {
    .page-container {
      padding: 30px 10px;
    }
  }

  @media screen and (max-width: 600px) {
    .page-container {
      padding: 20px 30px;
    }
  }
`;
