import React, { createContext, useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './PlayerStyles';

export const PlayerContext = createContext();

function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, children, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer ? ReactDOM.createPortal(
    <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
      <Inner>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
      </Inner>
    </Overlay>,
    document.body
    
  ) : null;
}

Player.Button = function PlayerButton({ children, ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);

  return <Button {...restProps}
    onClick={() => setShowPlayer(showPlayer => !showPlayer)}
  >{children}</Button>
}

Player.Close = function PlayerClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>
}

export default Player
