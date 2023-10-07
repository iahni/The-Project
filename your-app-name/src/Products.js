import React, { useEffect,useState} from 'react';

function Products()
{
    const [products, setProducts]= useState([]);
    
useEffect(() =>
{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then(( data) => setProducts(data));
},[]);

 return  ( 
  <div>
 <h2>Products</h2>
 <ul>
 {products.map((products) => (
        <li key ={products.id}>
           <h2> {products.title} </h2>
           <p> {products.price}</p>
           <p> {products.description}</p>
           </li>
        ))}
    </ul>
    </div> 
    );
}
 
export default Products;