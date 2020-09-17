import React from 'react';
import jumbo from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumbo.map(item => (
        <Jumbotron direction={item.direction} key={item.id}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default JumbotronContainer;
