import styled from 'styled-components';

export const ListSessionStyled = styled.div`
  h1 {
    fontsize: '14px';
    color: ${({ theme }) => theme.primaryColor};
  }

  .filter-group {
    margin-bottom: 20px;

    .select-status {
      margin-left: 10px;
    }
  }

  .loading {
    padding: 100px;
    text-align: center;
  }
`;
