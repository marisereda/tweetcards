import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 640px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1690px;
  }
`;
