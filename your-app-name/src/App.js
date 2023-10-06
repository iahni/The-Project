import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Chat from './Chat';

function App(){
  return (
    <Router>
      <Route exact path ="/" component
      ={Home}/>
      <Route path ="/chat" component={Chat}/>

    </Router>
  );
}

