import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Header = styled.div`
  height: 150px;
  padding: 20px;
  color: #fff;
  background-color: #222;
`

export const Logo = styled.img`
  animation: ${Spin} infinite 20s linear;
  height: 80px;
`

export const Title = styled.h1`
  font-size: 1.5em;
`
