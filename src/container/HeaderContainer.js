import React from 'react'
import { Header } from '../components'
import Logo from '../logo.svg';
function HeaderContainer({children}) {
  return (
    <div>
      <Header>
        <Header.Frame>
          <Header.Logo to="/" src={Logo} alt="Netflix"/>
          <Header.ButtonLink to="/signin">Signin</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </div>
  )
}

export default HeaderContainer
