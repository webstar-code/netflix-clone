import React from 'react'
import { Container, Input, Button, Text} from './OptformStyles'

function Optform({children, ...restProps}) {
  return (
    <div>
      <Container {...restProps}>
        {children}
      </Container>
    </div>
  )
}

Optform.Input = function OptformInput({ ...restProps}) {
  return (<Input {...restProps}/>)
}
Optform.Button = function Optformbutton({children, ...restProps}) {
  return (
      <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
      </Button>
  )
}

Optform.Text = function OptformText({children, ...restProps}) {
return (<Text {...restProps}>{children}</Text>)
}





export default Optform
