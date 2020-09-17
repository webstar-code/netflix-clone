import React from 'react';
import faqs from '../fixtures/faqs.json';
import Accordian from '../components/accordian/Accordian'
import { Optform } from '../components';

function AccordianContainer() {
  return (
    <div>
      <Accordian>
        <Accordian.Title>Frequently asked Questions</Accordian.Title>
        {faqs.map((item) =>
          <Accordian.Item key={item.id}>
            <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
          </Accordian.Item>
        )}

      </Accordian>

      <Optform>
        <Optform.Input placeholder="Email address" />
        <Optform.Button>Try Now</Optform.Button>
        <Optform.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </Optform.Text>
      </Optform>

    </div>
  )
}

export default AccordianContainer
