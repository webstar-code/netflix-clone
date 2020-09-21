import React, { useContext, useEffect, useState } from 'react'
import ProfilesContainer from './ProfilesContainer'
import { FirebaseContext } from '../context/FirebaseContext';
import { Card, Header, Loading, Player } from '../components';
import Logo from '../logo.svg';

function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState();
  const [category, setCategory] = useState('series');
  const [slidesRows, setSlideRows] = useState();

  const user = firebase.auth().currentUser || {};
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [profile.displayName]);
  // set the current SlideRows to slides[category]. Every Time slides or category changes.
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);
  return (
    <>
      {profile.displayName ?
        <>
          {loading ? <Loading src={user.photoURL} />
            : <Loading.ReleaseBody />}

          <Header src='joker1' dontShowOnSmallViewPort>
            <Header.Frame>
              <Header.Group>
                <Header.Logo to="/" src={Logo} alt="Netflix" />
                <Header.TextLink
                  active={category === 'series' ? true : false}
                  onClick={() => setCategory('series')}>Series</Header.TextLink>
                <Header.TextLink
                  active={category === 'films' ? true : false}
                  onClick={() => setCategory('films')}>films</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Search searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm} />
                <Header.Profile>
                  <Header.Picture src={user.photoURL} />
                  <Header.Dropdown>
                    <Header.Group>
                      <Header.Picture src={user.photoURL} />
                      <Header.TextLink>{user.displayName}</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                      <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
                    </Header.Group>
                  </Header.Dropdown>
                </Header.Profile>
              </Header.Group>
            </Header.Frame>
            <Header.Feature>
              <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
              <Header.Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque facilis exercitationem numquam officia libero molestiae sint impedit, similique quaerat distinctio vero? A, placeat sapiente nam vitae sit ipsam ratione, incidunt esse, ullam nostrum soluta obcaecati tempora quia delectus natus quo voluptatibus. Soluta aliquid reprehenderit unde quia tenetur nobis!
              </Header.Text>
              <Header.PlayButton>Play</Header.PlayButton>
            </Header.Feature>
          </Header>

          <Card.Group>
            {slidesRows.map(slideItem => (
              <Card>
                <Card.Title key={`${category}-${slideItem.title.toLowerCase()}`}>
                  {slideItem.title}
                </Card.Title>
                <Card.Entities>
                  {slideItem.data.map(item => (
                    <Card.Item item={item} key={item.title}>
                      <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                      <Card.Meta>
                        <Card.SubTitle>{item.title}</Card.SubTitle>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
                </Card.Entities>
                <Card.Feature category={category}>
                  <Player>
                    <Player.Button>Play Now</Player.Button>
                    <Player.Video src="/videos/bunny.mp4" />
                  </Player>
                </Card.Feature>
              </Card>
            ))}
          </Card.Group>

        </>
        :
        <ProfilesContainer user={user} setProfile={setProfile} />
      }
    </>
  )
}

export default BrowseContainer
