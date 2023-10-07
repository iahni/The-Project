import React, { useState} from "react";

function AddProduct() {
const [title, setTitle] = useState('');
const [description, setDescription]
= useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
        title, description,
    };
    fetch("https://fakestoreapi.com/products",
    {
    method:"POST",
    headers:{ "Content-Type": "application/json",
},
body:JSON.stringify(newProduct),
})
.then((response) => response.json())
.then((data) => {
    console.log ("New Product:",data);
})
.catch((error) => {
    console.error("Error:",error);
});
 
};
 
 return ( 
    <form onSubmit = {handleSubmit}>
        <label>
        Title:
        <input type = " text"
        value = {title}
        onChange = {(e) =>
        setTitle(e.target.value)}/>
        </label>
        <br/>
        <label>
            Description:
            <textarea value = {description} 
            onChange={(e) =>
            setDescription(e.target.value)}>
            </textarea>
        </label>
        <br/> <button type="submit">Add Product</button>
    </form>
 );
 }
 
 export default AddProduct;