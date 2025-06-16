import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  justify-content: center;

  height: 100vh;
`;

export const InputRow = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const ColorHeader = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh / 3);
  background: linear-gradient(to right, #4a90e2, #6f9edc);
  z-index: -1;
`;

export const SignIn = styled.div`
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