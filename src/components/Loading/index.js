import React from 'react';
import C from './Controller';
import styled, { keyframes } from 'styled-components';

const fakeLoad = keyframes`
  from {
    stroke-dashoffset: 100%;
    stroke-width: 1px;
    opacity: 0;
    stroke: red;
    transform: rotate(0);
  }
  to {
    stroke-dashoffset: 0;
    stroke-width: 1px;
    opacity: 1;
    stroke: olive;
    transform: rotate(180deg);
  }
`;

const SVG = styled.svg`
  position: fixed;
  width: 20vmin;
  left: 50%;
  top: 50%;
  margin: -10vmin;
  .progress {
    stroke: red;
    stroke-width: 0.2px;
    
    stroke-dasharray: 100;
    stroke-dashoffset: 100%;
    animation: ${fakeLoad} 2s infinite;
    
    transform-origin: center;
  }
`;

const Loading = ({
  svgClass,
}) => {
  return (
    <SVG xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 40 40" className={svgClass}>
      <circle className = "progress" fill = "none" stroke-linecap = "round" cx = "20" cy = "20" r = "15.915494309" />
    </SVG>
  )
};

export default C(Loading);