import styled, { css } from "styled-components";

export const Container = styled.main`
  display: flex;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  border-radius: 6px;

  width: 35%;

  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  z-index: 1;

  ${({ theme }) => css`
    background-color: #fff;
    box-shadow: ${theme.box.shadow.default};
  `};
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
`;