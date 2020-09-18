import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import FooterContainer from '../container/FooterContainer';
import HeaderContainer from '../container/HeaderContainer';
import { FirebaseContext } from '../context/FirebaseContext';
function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setemailAddress] = useState('');
  const [password, setpassword] = useState('');
  const [error, seterror] = useState('');

  const IsInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignIn = (e) => {
    e.preventDefault();

    // Firebase work here
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        // Update the Profile
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
      })
      .then(() => {
        // Redirect to browse
        history.push("/browse");
      })
      .catch((error) => {
        setFirstName('');
        setemailAddress('');
        setpassword('');
        seterror(error.message);
      })
  }
  return (
    <div>
      <>
        <HeaderContainer>
          <Form>
            <Form.Title>Sign Up</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignIn} method="post">
              <Form.Input placeholder="First Name"
                tyepe="text"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)} />
              <Form.Input placeholder="Email or phone number"
                tyepe="email"
                value={emailAddress}
                onChange={({ target }) => setemailAddress(target.value)} />
              <Form.Input placeholder="password"
                type="Password"
                value={password}
                onChange={({ target }) => setpassword(target.value)} />

              <Form.Submit type="submit" disabled={IsInvalid}>Sign Up</Form.Submit>

              <Form.Text>
                Already have account?<Form.Link to="/signin"> Sign In Now</Form.Link>
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

    </div>
  )
}

export default Signup
