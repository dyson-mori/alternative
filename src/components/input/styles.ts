// styles.ts (ou junto ao componente, se preferir)
import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  margin: 10px 0;
  width: 100%;

  .entryarea {
    position: relative;
    height: 45px;
    line-height: 45px;
    border-radius: 3px;
  };

  input {
    position: absolute;
    width: 100%;
    outline: none;
    /* font-size: 2.2rem; */
    padding: 0 15px;
    line-height: 45px;
    border: 1px solid #dedede;
    background-color: transparent;
    transition: 0.1s ease;
    z-index: 1;
    border-radius: 3px;

    ${({ theme }) => css`
      font-family: ${theme.font.family};
    `};
  };

  .labelline {
    position: absolute;
    font-size: 14px;
    color: #909090;
    margin: 0 15px;
    padding: 0 5px;
    background-color: #FFF;
    transition: 0.3s ease;
  };

  input:focus, input:valid {
    color: #303030;
    border: 1px solid #41B06E;
  };

  input:focus + .labelline,
  input:valid + .labelline {
    color: #41B06E;
    height: 30px;
    line-height: 30px;
    transform: translate(-15px, -16px) scale(0.88);
    z-index: 1;
  };
`;