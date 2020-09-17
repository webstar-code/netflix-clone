import React, { createContext, useState, useContext } from 'react'
import { Container, Inner, Title, Item, Header, Body } from './AccordianStyles';
const ToggleContext = createContext();

function Accordian({ children, ...restProps }) {
  return (
    <div>
      <Container {...restProps}>
        <Inner>
          {children}
        </Inner>
      </Container>
    </div>
  )
}


Accordian.Title = function AccordianTitle({ children, ...restProps }) {
  return (<Title {...restProps}>{children}</Title>)
}
Accordian.Item = function AccordianItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}
Accordian.Header = function AccordianHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (<Header {...restProps}
    onClick={() => setToggleShow((toggleShow) => !toggleShow)}>
    {children}
    {toggleShow ?
      <img src="/images/icons/close-slim.png" alt="close" />
      :
      <img src="/images/icons/add.png" alt="open" />
    }
  </Header>)
}
Accordian.Body = function AccordianBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <>
      {toggleShow ? <Body {...restProps}>{children}</Body> : null}
    </>

  )
}

export default Accordian
