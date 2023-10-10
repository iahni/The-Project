import React, {useState} from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import AddProducts from './ProductDetails';
import Navigation from './Navigation';
import Login from './Login';


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
  pageContent= <AddProducts/>;
}
else if (currentPage === 'login'){
  pageContent =<Login/>
};

  return (
    <div>
      
<Navigation 
onLinkClick={handleLinkClick}/>
      {pageContent}
      
  </div>
  
  );
}


export default App;


