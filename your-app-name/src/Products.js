import React, { useEffect,useState} from 'react';

function Products()
{
    const [products, setProducts]= useState([]);
    
useEffect(() =>
{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then(( data) => setProducts(data));
},
[]
);

 return  ( 
  <div>
 <h2>Products</h2>
 <ul>
 {products.map((product) => (
        <li key ={product.id}>{product.title} </li>
        ))}
    </ul>
    </div> 
    );
}
 
export default Products;