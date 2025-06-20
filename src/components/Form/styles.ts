import styled from 'styled-components'
import { HTMLAttributes } from 'react'; // <--- Add this import

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>` // <--- Modify this line
  margin-top: 3rem;
  display: grid;
  place-items: center;

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;

    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: 1px solid #fff;
      background: none;
      color: white;
      font-weight: 600;

      &::placeholder {
        color: #fff;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 740px) {
    form {
      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSuccess = styled.div<HTMLAttributes<HTMLDivElement>>` // <--- Modify this line
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    color: #fbfbfb;
  }
`;