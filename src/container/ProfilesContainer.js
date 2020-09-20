import React from 'react'
import { Header, Profiles } from '../components'
import Logo from '../logo.svg';

function ProfilesContainer({user, setProfile}) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to="/" src={Logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item>
            <Profiles.Picture src={user.photoURL} 
            onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  )
}

export default ProfilesContainer
