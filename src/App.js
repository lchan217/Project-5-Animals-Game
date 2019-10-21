import React from 'react';
import AnimalContainer from './containers/AnimalContainer.js'
import UserContainer from './containers/UserContainer.js'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserForm from './components/welcome/UserForm';
import NavBar from './components/NavBar';
import Instructions from './components/Instructions';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/data'  component={UserForm} />
        <Route exact path='/'  component={Instructions} />
        <Route exact path='/animals'  component={AnimalContainer} />
        <Route exact path='/users/:id' render= {({match}) => < UserContainer filter={match.params.id}/>} />

      </div>
    </Router>
  )
}

export default App;
