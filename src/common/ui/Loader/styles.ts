import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

export const Main = styled.div`
  width: 81px;
  height: 81px;
  display: inline-block;
  overflow: hidden;
  background: none;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.81);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;

export const LoaderStyle = styled.div`
    position: absolute;
    animation: ${loaderAnimation} .5s linear infinite;
    width: 80px;
    height: 80px;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    box-shadow: 0 3px 0 0 black;
    transform-origin: 40px 41.5px;
`;
