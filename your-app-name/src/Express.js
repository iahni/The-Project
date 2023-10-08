const express = require('express');
 const app = express();
  const bodyParser = require('body-parser');
   // Middleware 
   app.use(bodyParser.json());
    // In-memory data store for products
     let products = [];
      // GET /products - Get all products
       app.get('/products', (req, res) => { res.json(products); });
        // POST /products - Create a new product
         app.post('/products', (req, res) => { const newProduct = req.body; products.push(newProduct); res.status(201).json(newProduct); });
          // DELETE /products/:id - Delete a product by ID
           app.delete('/products/:id', (req, res) => { const productId = req.params.id; 
            const index = products.findIndex((product) => product.id === productId);
             if (index !== -1) { const deletedProduct = products.splice(index, 1)[0]; res.json(deletedProduct); }
              else { res.status(404).json({ error: 'Product not found' }); } }); 
              // Start the server const port = 3000;
               app.listen(port, () => { console.log(`Server is running on port ${port}`); });