import React from 'react';
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
      
          <Route exact path = "/" component = {Home}/>
          <Route path = "/add-product"
          component = {AddProducts}/>
    
      </div>
    </Router>
  );
}

export default App;


