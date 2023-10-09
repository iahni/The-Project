import React, { useEffect,useState} from 'react';

import './index.css'

function Products()
{
    const [products, setProducts]= useState([]);
    
useEffect(() =>
{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then(( data) => setProducts(data));
},[]);
  const deleteProduct = (productId) => { 
        fetch(`https://fakestoreapi.com/products/${productId}`, { 
        method: "DELETE", })
         .then((response) => response.json()) 
         .then(() => { 
            // Remove the deleted product from the products array
             setProducts(products.filter((product) => product.id !== productId)); }) 
             .catch((error) => { 
                console.error("Error:", error); }); }; 

 return  ( 
  <div>
 <h2>Products</h2>
 <div className='product'>
 {products.map((products) => (
        <div className= 'products'key ={products.id}>
           <h2> {products.title} </h2>
           <p> {products.price}</p>
           <p> {products.description}</p>
           <img src= {products.image} alt ={products.title}/>

        
<button onClick={()=>
deleteProduct(products.id)}>Delete</button>
           </div>
        ))}
    </div>
    </div> );



    
 }
 
export default Products;