import React from "react";

function Navigation({onLinkClick})
    {
        return (
  <nav>
 <ul>
     <li>
  <button onClick={() =>
  onLinkClick('home')}> Home</button></li>
    <li>
<button onClick={() =>
  onLinkClick('products')}> Products</button></li>
    <li>
 <button onClick={() =>
  onLinkClick('add-products')}> Add Products </button></li>
     </ul>
    </nav>
        );
    }
export default Navigation;

 