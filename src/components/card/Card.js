import React, { createContext, useState, useContext } from 'react'

import {
  Container, Group, Item, Title, SubTitle, Text,
  Feature, FeatureTitle, FeatureText, FeatureClose,
  Maturity, Content, Meta, Entities, Image
} from './CardStyles';

export const FeatureContext = createContext();

function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState();
  return (
    <FeatureContext.Provider
      value={{showFeature, setShowFeature, itemFeature, setItemFeature}}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  )
}

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}
Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Card.Meta = function CardMeta({ children, ...restProps }) {
  return <Meta {...restProps}>{children}</Meta>
}
Card.Entities = function CardEntities({ children, ...restProps }) {
  return <Entities {...restProps}>{children}</Entities>
}
Card.Item = function CardItem({ item, children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);
  return <Item
    onClick={() => {
      setItemFeature(item)
      setShowFeature(true);
    }}
    {...restProps}>{children}</Item>
}
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps}></Image>
}

Card.Feature = function CardFeature({ category, chidlren, ...restProps }) {
  const {itemFeature, showFeature, setShowFeature } = useContext(FeatureContext);
  return showFeature ? (
    <Feature {...restProps}
    src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>
        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>

      <Group margin="30px 0" flexDirection="row" alignItems="center">
        <Maturity rating={itemFeature.maturity}>
          {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
        </Maturity>
        <FeatureText fontWeight="bold">
          {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
        </FeatureText>
      </Group>
      </Content>
    </Feature>
  ): null
}


export default Card
