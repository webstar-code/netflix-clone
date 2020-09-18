import React from 'react'
import HeaderContainer from '../container/HeaderContainer';
import JumbotronContainer from '../container/JumbotronContainer';
import FooterContainer from '../container/FooterContainer';
import AccordianContainer from '../container/AccordianContainer';
import FeatureContainer from '../container/FeatureContainer';

function Home() {
  return (
    <>
      <HeaderContainer>
        <FeatureContainer />
      </HeaderContainer>
      <JumbotronContainer />
      <AccordianContainer />
      <FooterContainer />
    </>
  )
}

export default Home
