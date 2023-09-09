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
        width: 100%;
        background-color: #0d0c0f;
        display: flex;
        align-items: center;
        gap: 2.4rem;
        border-radius: 0.8rem;
        svg {
          width: 2.4rem;
          height: 2.4rem;
          color: ${({ theme }) => theme.COLORS.ROSE};
          cursor: pointer;
        }


        > div {
          display: flex;
          align-items: center;
          border: 2px dashed;
          border-radius: 1rem;
          background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
          input {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};
            color: ${({ theme }) => theme.COLORS.WHITE};
            border: none;
            outline: none;
            font-weight: 400;
            padding: 1.6rem;
            border-radius: 1rem;
            max-width: 15rem;
          }
          svg {
            margin-right: 1.6rem;
          }
        }
      }
    


`