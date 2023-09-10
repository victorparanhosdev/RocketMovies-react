import styled from "styled-components";

export const Container = styled.section`
      h2 {
        color: ${({ theme }) => theme.COLORS.TEXT};
        font-size: 2rem;
        font-weight: 400;
      }

      > div {
        margin-top: 2.4rem;
        padding: 1.6rem;
        gap: 1.6rem;
        background-color: #0d0c0f;
        display: flex;
        align-items: center;
        flex-flow: wrap;
      }
      
    


`