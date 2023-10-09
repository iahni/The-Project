
import React from "react";

function Navigation({onLinkClick})  {
        return (
  <nav>
 <ul>

  <button onClick={() =>
  onLinkClick('home')}> Home</button>

<button onClick={() =>
  onLinkClick('products')}> Products</button>

 <button onClick={() =>
  onLinkClick('add-products')}> Add Products </button>
     </ul>
    
    </nav>);
    }
    export default Navigation;
 
