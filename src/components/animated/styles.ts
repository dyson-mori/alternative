import styled from "styled-components";

export const Container = styled.div`
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