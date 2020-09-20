import React from 'react'
import { Container, Title, SubTitle, BrowseFeature, BrowseTitle, BrowseSubTitle, PlayButton } from './FeatureStyles';

function Feature({ children, ...restProps }) {
  return (
    <div>
      <Container {...restProps}>
        {children}
      </Container>
    </div>
  )
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Feature.BrowseFeature = function FeatureBrowseFeature({ children, ...restProps }) {
  return <BrowseFeature {...restProps}>{children}</BrowseFeature>
}

Feature.BrowseTitle = function FeatureBrowseTitle({ children, ...restProps }) {
  return <BrowseTitle {...restProps}>{children}</BrowseTitle>
}

Feature.BrowseSubTitle = function FeatureBrowseSubTitle({ children, ...restProps }) {
  return <BrowseSubTitle {...restProps}>{children}</BrowseSubTitle>
}

Feature.PlayButton = function FeaturePlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

export default Feature
