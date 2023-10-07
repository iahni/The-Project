import React from 'react';
import {Switch} from 'react-router-dom';
import Home from './Home';
import AddProducts from './AddProducts';
function App()
{
  return (
    <Router>
      <div>
        <h1>
          my app
        </h1>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/add-product"
          component = {AddProducts}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


