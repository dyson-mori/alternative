import styled, { css } from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  border-radius: 6px;

  width: 100%;
  max-width: 500px;

  margin: auto 5px;

  ${({ theme }) => css`
    background-color: #fff;
    box-shadow: ${theme.box.shadow.default};
  `};
`;