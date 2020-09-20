import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuthListener } from './hooks';
import Browse from './pages/Browse';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { IsUserRedirect, ProtectedRoutes } from './routes';



function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      {/* Signup-- Redirect to browse if user exists */}
      <IsUserRedirect user={user} loggedInPath={"/browse"} path="/signup">
        <Signup />
      </IsUserRedirect>
      {/* Signin-- Redirect to browse if user exists */}
      <IsUserRedirect user={user} loggedInPath={"/browse"} path="/signin">
        <Signin />
      </IsUserRedirect>
      {/* Home-- Redirect to browse if user exists */}
      <IsUserRedirect user={user} loggedInPath={"/browse"} path="/" exact>
        <Home />
      </IsUserRedirect>
      {/* Browse-- Protected Route if user not exists Redirect to Signin */}
      <ProtectedRoutes user={user} path="/browse">
        <Browse />
      </ProtectedRoutes>
    </Router>

  )
}

export default App;
