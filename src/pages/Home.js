import React from 'react'
import HeaderContainer from '../container/HeaderContainer';
import JumbotronContainer from '../container/JumbotronContainer';
import FooterContainer from '../container/FooterContainer';
import AccordianContainer from '../container/AccordianContainer';

function Home() {
  return (
    <HeaderContainer>
      <JumbotronContainer />
      <AccordianContainer />
      <FooterContainer />
    </HeaderContainer>
  )
}

export default Home
