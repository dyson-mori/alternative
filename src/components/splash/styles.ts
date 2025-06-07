import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #f1f1f1;

  overflow: hidden;

  z-index: 2;

  svg {
    animation: float 4s ease-in-out infinite;
  };

  p {
    margin-top: 20px;
  }

  @keyframes float {
    0% {
      filter: drop-shadow(5px 5px 5px #aaa);
      transform: translateY(0px);
    }
    50% {
      filter: drop-shadow(5px 5px 25px #aaa);
      transform: translateY(-25px);
    }
    100% {
      filter: drop-shadow(5px 5px 5px #aaa);
      transform: translateY(0px);
    }
  }
`;
