import styled from 'styled-components';

import kangto from './image/kangto.jpeg'
import zeze from './image/zeze.jpg';

export const Wrap = styled.div`
`

export const Photo = styled.div`
  width: 600px;
  margin: 0 auto;
  padding-bottom: 30px;
  box-sizing: border-box;
  background-color: #E2D2C2;

  > h1 {
    line-height: 80px;
    background-color: #716961;
  }
`

export const Img = styled.div`
  width: 500px;
  height: 480px;
  margin: 45px auto 30px;
  margin-bottom: 20px;
  background: #000 url(${zeze}) center center no-repeat;
  background-size: cover;
`

export const TextWrap = styled.div`
  padding: 0 50px;
  
  > p {
    line-height: 20px;
  }
`

export const StatusControl = styled.div`
  text-align: left;
  margin-bottom: 20px;

  > span {
    float: left;
    margin-left: 15px;
    line-height: 35px;
  }
`

export const HeartBtn = styled.button`
  float: left;
  height: 35px;
  border: 0;
  background-color: transparent;
`

export const HashTag = styled.p`
  color: #2362BF;
  font-style: italic;
  text-align: left;
`

export const Text = styled.p`
  color: #161513;
  text-align: left;
`

export const Date = styled.p`
  padding-top: 20px;
  text-align: right;
`