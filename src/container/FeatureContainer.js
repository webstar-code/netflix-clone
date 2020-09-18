import React from 'react'
import { Feature, Optform } from '../components'


function FeatureContainer() {
  return (
    <Feature>
      <Feature.Title>
        Unlimited movies, TV shows and more
          </Feature.Title>
      <Feature.SubTitle>
        Watch anywhere , cancel at anytime.
          </Feature.SubTitle>

      <Optform>
        <Optform.Input placeholder="Email address" />
        <Optform.Button>Try Now</Optform.Button>
        <Optform.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </Optform.Text>
      </Optform>


    </Feature>
  )
}

export default FeatureContainer
