import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;

  height: 100vh;
`;

export const SignUp = styled.div`
  margin: 10px 0;
  a {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  };

  p {
    font-size: 90%;
    color: ${({ theme }) => theme.colors.text};
  };
`;