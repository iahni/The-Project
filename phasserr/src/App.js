import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import Navbar from './components/Navbar'; 
 import Home from './components/Home';
  import Products from './components/Products';
   import AboutUs from './components/AboutUs';
    import ProductDetails from './components/ProductDetails'; 
    function App() 
    {
      return (<Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/"Component={Home}/>
            <Route exact path="/product"Component={Products}/>
            <Route path="/products/:id"Component={ProductDetails}/>
            <Route path="/about"Component={AboutUs}/>

          </Switch>

        </div>
      </Router>
      );
    }
    export default App; 