import React from 'react';import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import AddProducts from './AddProducts';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/add-products" component={AddProducts} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;

