import styled from 'styled-components'

export const Container = styled.div`
  header {
    background: ${({ theme }) => theme.COLORS.ROSEOPACITY};
    height: 14.4rem;
    display: flex;
    align-items: center;
    > div:first-child {
      width: min(100%, 144rem);
      margin: auto;
      a {
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: start;
      }
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: auto;
  top: -10rem;
  position: relative;

  div:nth-child(3) {
    margin-bottom: 2.4rem;

  }
  div:nth-child(5) {
    margin-bottom: 2.4rem;

  }

`

export const Avatar = styled.div`

margin-bottom: 6.4rem;
display: flex;
justify-content: center;

  > div {
    height: 18.6rem;
    position: relative;
    width: 18.6rem;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }

    label {
      position: absolute;
      bottom: 0;
      right: 0;
      background: ${({ theme }) => theme.COLORS.ROSE};
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      > svg {
        width: 2rem;
        height: 2rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }

      input {
        display: none;
      }
    }
  }
`
