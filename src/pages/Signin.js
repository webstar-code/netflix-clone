import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import FooterContainer from '../container/FooterContainer';
import HeaderContainer from '../container/HeaderContainer';
import { FirebaseContext } from '../context/FirebaseContext';

function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setemailAddress] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');

  const IsInvalid = password === '' || emailAddress === '';

  const handleSignIn = (e) => {
    e.preventDefault();

    // Firebase work here
    firebase.auth().signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push('/browse');
      })
      .catch((error) => {
        setemailAddress('');
        setpassword('');
        seterror(error.message);
      })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="post">
            <Form.Input placeholder="Email or phone number"
              tyepe="email"
              value={emailAddress}
              onChange={({ target }) => setemailAddress(target.value)} />
            <Form.Input placeholder="password"
              type="Password"
              value={password}
              onChange={({ target }) => setpassword(target.value)} />

            <Form.Submit type="submit" disabled={IsInvalid}>Sign In</Form.Submit>

            <Form.Text>
              New to Netflix?<Form.Link to="/signup">Sign Up Now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <Form.Link to="/">Learn more.</Form.Link>
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default Signin
