import React from 'react';
import {BrowserRouter as Router,Switch, Route} from ' react-router-dom';
import Home from './Home';
import Chat from './Chat';

function App(){
  return (
    <Router>
      <div>
        <h1>
          my app
        </h1>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/add-product"
          component = {AddProduct}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


