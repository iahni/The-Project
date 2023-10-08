 import React, { useState, useEffect } from "react"; 

function AddProduct() { 
const [title, setTitle] = useState("");
 const [description, setDescription] = useState(""); 
 const [products, setProducts] = useState([]);
  useEffect(() => { 
    
    fetch("https://fakestoreapi.com/products")
     .then((response) => response.json())
     .then((data) => { setProducts(data); })
  .catch((error) => { console.error("Error:", error); });
 }, []); 
 const handleSubmit = (e) => { e.preventDefault(); const newProduct = { title, description, }; 
 fetch("https://fakestoreapi.com/products",
  {
     method: "POST", headers: 
     { "Content-Type": "application/json",
     }, 
     body: JSON.stringify(newProduct), })
      .then((response) => response.json())
     .then((data) => { console.log("New Product:", data);
      // Add the new product to the products array
       setProducts([...products, data]); })
     .catch((error) => { console.error("Error:", error); }); };
      const deleteProduct = (productId) => { 
        fetch(`https://fakestoreapi.com/products/${productId}`, { 
        method: "DELETE", })
         .then((response) => response.json()) 
         .then(() => { 
            // Remove the deleted product from the products array
             setProducts(products.filter((product) => product.id !== productId)); }) 
             .catch((error) => { 
                console.error("Error:", error); }); }; 
                return (
                    <div>
{products.map((product) => (
    <div key ={product.id}>
        <h3>{product.title}</h3>

<p>{product.description}</p>
<button onClick={()=>
deleteProduct(product.id)}>Delete</button>
</div>
))}
<form onSubmit={handleSubmit}>
<label>
Title: 
<input type ="text" value={title}
onChange={(e)=>
 setTitle(e.target.value)} />
 </label>
 <br/>
 <label>
Description:<textarea value = {description}onChange={(e)=>

 setDescription(e.target.value)}></textarea>
 </label>
 <br/>

<button type="submit">Add Product </button>
</form>
</div>

); } export default AddProduct; 