import styled from 'styled-components'

export const Container = styled.div`
width: min(97%, 140rem);
margin: auto;
`

export const Text = styled.div`
  textarea {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    padding: 1.9rem 1.6rem;
    border-radius: 1rem;
    margin: 4rem auto;
    border: none;
    width: 100%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 2px solid transparent;
    transition: border 0.3s;
    outline: none;
    resize: none;

    &:focus {
      border: 2px solid ${({ theme }) => theme.COLORS.ROSE};
    }

    &::placeholder {
      font-family: 'Roboto';
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-weight: 400;
    }
  }

  > div:has(input) {
    display: flex;
    gap: 4rem;
  }
`

export const Content = styled.div`
  max-width: 140rem;
  margin: 4rem auto 0;

  main {
    height: calc(100vh - 30rem);

    > h1 {
      font-size: 3.6rem;
      font-weight: 500;
      font-family: 'Roboto Slab';
      margin: 2.4rem auto 4rem;
    }
    > div:has(span) {
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
        span:first-child {
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
    }
  }

  > a {
    justify-content: start;
  }

  div:has(a) {
    display: flex;
    gap: 4rem;
    margin: 4rem auto;
    a:first-child {
      background-color: #0d0c0f;
      color: #ff859b;
    }
  }
`
