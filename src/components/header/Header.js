import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Container, Background, Logo, ButtonLink,
  Feature, FeatureCallOut, Text, PlayButton,
  Group, Link, Profile, Picture, Dropdown,
  Search, SearchIcon, SearchInput
} from './HeaderStyles'


function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return (<Container {...restProps}>{children}</Container>)
}
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return (<ButtonLink {...restProps}>{children}</ButtonLink>)
}
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (<ReactRouterLink to={to}>
    <Logo {...restProps} />
  </ReactRouterLink>)
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}
Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}
Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}
Header.Picture = function HeaderPicture({ src, children, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} />
}
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown>{children}</Dropdown>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);
  return (
  <Search>
    <SearchIcon
      onClick={() => setSearchActive(searchActive => !searchActive)}
      active={searchActive}>
      <img src="/images/icons/search.png" alt="Search" />
    </SearchIcon>

    <SearchInput
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
      type="text"
      placeholder="Search movies and TV shows"
      active={searchActive}
      {...restProps}
    />
  </Search>
  )
}












export default Header
