import styled from "styled-components";

export const Container = styled.div`
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
            border-radius: 1rem;
            max-width: 15rem;
            padding: 1.6rem;
          }

          button {
            display: flex;
            background: none;
            border: none;
            cursor: pointer;
            
            svg {
              margin-right: 1.6rem;
            color: ${({ theme }) => theme.COLORS.ROSE};
            }
          }


`