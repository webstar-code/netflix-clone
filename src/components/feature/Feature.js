import React from 'react'
import { Container, Title, SubTitle } from './FeatureStyles';

function Feature({ children, ...restProps }) {
  return (
    <div>
      <Container>
        {children}
      </Container>
    </div>
  )
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle>{children}</SubTitle>
}
export default Feature
