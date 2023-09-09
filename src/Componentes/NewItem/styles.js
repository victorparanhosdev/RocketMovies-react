import styled from "styled-components";


export const Container = styled.span`
          font-size: 1.6rem;
          font-family: 'Roboto';
          color: #ffffff;
          font-weight: 400;
          padding: 1.6rem;
          background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
          border-radius: 1rem;
          display: flex;
          align-items: center;
          gap: 1.6rem;
`