import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  height: 100vh;
`;

export const SvgAnimated = styled.div`
  svg {
    animation: float 3s ease-in-out infinite;
  };

  @keyframes float {
    0% {
      filter: drop-shadow(5px 5px 5px #aaa);
      transform: translateY(0px);
    }
    50% {
      filter: drop-shadow(5px 5px 25px #aaa);
      transform: translateY(-10px);
    }
    100% {
      filter: drop-shadow(5px 5px 5px #aaa);
      transform: translateY(0px);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  border-radius: 6px;

  width: 35%;
  min-width: 500px;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  ${({ theme }) => css`
    background-color: #fff;
    box-shadow: ${theme.box.shadow.default};
  `};
`;

export const SignUp = styled.div`
  margin: 10px 0;
  a {
    /* text-decoration: none; */
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  };

  p {
    font-size: 90%;
    color: ${({ theme }) => theme.colors.text};
  };
`;