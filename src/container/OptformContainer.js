import React from 'react'
import {Optform} from '../components'
function OptformContainer() {
  return (
    <div>
      <Optform>
        <Optform.Input placeholder="Email address" />
        <Optform.Button>Try Now</Optform.Button>
      </Optform>
    </div>
  )
}

export default OptformContainer
