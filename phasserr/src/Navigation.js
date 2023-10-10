
import React from "react";

function Navigation({onLinkClick})  {
        return (
             <nav>
     <ul> <li>
<Link to= "/"> Home</Link></li>
<li>
<Link to ="/products"> Products </Link></li>
<li>
<Link to ="/add-products"> AddProducts</Link></li>
<li>
<Link to ="/login">login</Link></li>
</ul>
</nav>
        );

    };
export default Navigation;

 