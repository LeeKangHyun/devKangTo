import React from 'react';

import logo from './image/logo.svg';

import { Header, Logo, Title } from './styled';

const HomePage = () => {
  return (
    <div>
      <Header>
        <Logo src={logo} alt="logo" />
        <Title>DevKangTo World</Title>
      </Header>
    </div>
  )
};

export default HomePage;