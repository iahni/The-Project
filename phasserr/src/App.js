import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import AddProducts from './components/AddProducts';
import Navigation from './components/Navigation';
import Login from './components/Login';


function App()
{
  const [currentPage, setCurrentPage]=
  useState('home');

  const handleLinkClick = page => {
    setCurrentPage(page);
  };
  let pageContent;
  if(currentPage === 'home') {
    pageContent = <Home/>;
}
else if (currentPage === 'products'){
  pageContent = <Products/>;
}
else if (currentPage === 'add-products'){
  pageContent= <AddProducts/>
};

  return (
    <div>
      
<Navigation 
onLinkClick={handleLinkClick}/>
      {pageContent}
      <LoginApp/>
  </div>
  
  );
}
const App =()=>{
  return (div>
    <Switch>
      <Route exact path="/"
      Component={Home}/>
      <Route path ="/Products"
      Component={Products}/>
      <Route path="/add-products"
      Component={AddProducts}/>
      <Route path = "/login"
      Component={Login}/>
      <Route path ="/navigation"
      Component={Navigation}/>
    </Switch>)
}
export default App;


