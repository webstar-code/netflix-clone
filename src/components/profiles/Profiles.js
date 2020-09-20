import React from 'react'
import {Container, Title, List, Item, Picture, Name } from './ProfilesStyles';

function Profiles({children, ...restProps}) {
  return (
    <div>
      <Container {...restProps}>{children}</Container>
    </div>
  )
}

Profiles.Title = function ProfilesTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}
Profiles.List = function ProfilesList({children, ...restProps}) {
  return <List {...restProps}>{children}</List>
}
Profiles.Item = function ProfilesItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
}
Profiles.Picture = function ProfilesPicture({src, ...restProps}) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}></Picture>
}
Profiles.Name = function ProfilesName({children, ...restProps}) {
  return <Name {...restProps}>{children}</Name>
}
export default Profiles
