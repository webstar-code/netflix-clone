import React from 'react'
import { Inner, Container, SubTitle, Title, Image, Pane, Item } from './JumbotronStyles';


function Jumbotron({ children, direction, ...restProps }) {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return (<Container {...restProps}>{children}</Container>)
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return (<Title {...restProps}>{children}</Title>)
}

Jumbotron.Subtitle = function JumbotronSubTitle({ children, ...restProps }) {
  return (<SubTitle {...restProps}>{children}</SubTitle>)
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return (<Pane {...restProps}>{children}</Pane>)
}


Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
  return (<Image {...restProps}></Image>)
}

export default Jumbotron
