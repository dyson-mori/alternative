import styled, { css } from 'styled-components';
import Link from "next/link";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 50px;

  background-color: #fff;

  ${({ theme }) => css`
    position: fixed;
    box-shadow: ${theme.box.shadow.strong};
  `};

  @media (max-width: 500px) {
    padding: 0;
    justify-content: space-between;
  };

  z-index: 3;
  transition: .5s;
`;

export const Icon = styled(Link)`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  ${({ theme }) => css`
    p {
      position: absolute;
      top: 5px;
      left: 5px;
      color: ${theme.colors.primary};
      font-size: 60%;
      font-weight: 700;
    };

    @media (max-width: 600px){
      p {
        font-size: 100%;
        font-weight: 600;
      }
    };

    .logo {
      width: 100%;
      height: 100%;
      stroke: ${theme.colors.primary};
    };

    .shopping-cart {
      stroke: ${theme.colors.primary};
    }
  `};
`;

export const Animated = styled.div`
  #header-svg {
    animation: head 2s ease-in-out infinite;
  };

  @keyframes head {
    0% {
      filter: drop-shadow(5px 5px 5px #aaa);
      transform: translateY(1px);
    }
    50% {
      filter: drop-shadow(5px 5px 25px #aaa);
      transform: translateY(0px);
    }
    100% {
      filter: drop-shadow(5px 5px 5px #aaa);
      transform: translateY(1px);
    }
  }
`;

export const Nav = styled.nav`
  display: flex;

  align-items: center;

  padding: 0 60px;

  width: 100%;

  ${({ theme }) => css`
    @media (max-width: ${theme.responsive.mobile}){
      padding: 0 20px;
    };
  `};

  @media (max-width: 500px){
    display: none;
  };
`;

export const LinkStyle = styled(Link) <{ $selected: boolean }>`
  position: relative;

  padding: 15px;

  text-decoration: none;

  ${({ theme, $selected }) => css`
    font-size: 90%;
    font-weight: 400;
    color: ${theme.colors.text};
    
    ${$selected && css`
      color: ${theme.colors.primary};
      font-weight: 600;
    `};

    @media (max-width: ${theme.responsive.mobile}){
      padding: 10px 15px;
    };
  `};
`;
