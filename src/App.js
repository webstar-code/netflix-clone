import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browse from './pages/Browse';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';



function App() {
  return (
    <Router>
      <Route exact path="/"><Home /></Route>
      <Route path="/browse"><Browse /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/signin"><Signin /></Route>
    </Router>

  )
}

export default App;
