import styled from 'styled-components'

export const Container = styled.div`
 width: min(97%, 140rem);
  margin: auto;
`

export const Content = styled.div`
  max-width: 140rem;
  margin: 4rem auto 0;
  > a {
    width: fit-content;
    justify-content: flex-start;
    margin-bottom: 2.4rem;
  }
`

export const Film = styled.div`
  width: 100%;
  height: calc(100vh - 25rem);
  overflow-y: auto;
  > p {
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-weight: 400;
    text-align: justify;
    padding-right: 1rem;
  }

  div:last-child {
    margin-top: 4rem;

    button {
      background-color: #0d0c0f;
      color: ${({theme})=> theme.COLORS.ROSE};
      width: 100%;
      height: 5.6rem;

      font-weight: 700;
      border-radius: 1rem;
      border: none;
    }
  }
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1.5rem;
  padding: 4rem 0;

  span {
    background: ${({ theme }) => theme.COLORS.ROSEOPACITY};
    padding: 0.8rem 1.6rem;
  }
`

export const Icons = styled.div`
  margin: 0.8rem 0 1.5rem;
  display: flex;
  align-items: center;

  gap: 0.6rem;
  > h2 {
    font-size: 3.6rem;
    margin-right: 1.9rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`

export const Autor = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  span:first-child {
    font-size: 1.6rem;
    font-family: 'Roboto';
    font-weight: 400;
    display: flex;

    gap: 0.8rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  span:last-child {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Roboto';
    display: flex;

    gap: 0.8rem;
    >svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`