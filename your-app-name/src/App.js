import React from 'react';
import {BrowserRouter as Router,Switch, Route} from ' react-router-dom';
import Home from './Home';
import Chat from './Chat';

function App(){
  return (
    <Router>
      <div>
        <h1>
          Messages App
        </h1>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/chat"
          component = {Chat}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


