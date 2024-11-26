import express from 'express'

const products = [
    { id: 1, price: 29.99, name: 'Men\'s T-Shirt', category: 'Men' },
    { id: 2, price: 49.99, name: 'Women\'s Jacket', category: 'Women' },
    { id: 3, price: 19.99, name: 'Boys\' Sneakers', category: 'Boy' },
    { id: 4, price: 25.99, name: 'Girls\' Dress', category: 'Girl' },
    { id: 5, price: 99.99, name: 'Men\'s Watch', category: 'Men' },
    { id: 6, price: 39.99, name: 'Women\'s Sunglasses', category: 'Women' },
    { id: 7, price: 59.99, name: 'Men\'s Leather Shoes', category: 'Men' },
    { id: 8, price: 15.99, name: 'Girls\' Hairband', category: 'Girl' },
    { id: 9, price: 199.99, name: 'Women\'s Handbag', category: 'Women' },
    { id: 10, price: 10.99, name: 'Boys\' Baseball Cap', category: 'Boy' },
    { id: 11, price: 29.99, name: 'Men\'s Hoodie', category: 'Men' },
    { id: 12, price: 18.99, name: 'Girls\' Shoes', category: 'Girl' },
    { id: 13, price: 89.99, name: 'Men\'s Denim Jacket', category: 'Men' },
    { id: 14, price: 45.99, name: 'Women\'s Skirt', category: 'Women' },
    { id: 15, price: 22.99, name: 'Boys\' T-Shirt', category: 'Boy' },
    { id: 16, price: 34.99, name: 'Girls\' Backpack', category: 'Girl' },
    { id: 17, price: 55.99, name: 'Men\'s Sunglasses', category: 'Men' },
    { id: 18, price: 24.99, name: 'Women\'s Scarf', category: 'Women' },
    { id: 19, price: 75.99, name: 'Boys\' Jacket', category: 'Boy' },
    { id: 20, price: 38.99, name: 'Girls\' Leggings', category: 'Girl' }
  ];
  

const app = express();
const port = 4000 ; 


app.get('/', (req , res)=>{
    res.status(200);
    res.json(products);
})

app.get('/filter' , (req , res)=>{
    const {category , price} = req.query ; 
    let result = products ;

    result = category ? result.filter(pro => pro.category.toLowerCase() == category.toLowerCase()) : result ; 
    result = price ? result.filter(pro => pro.price <= Number(price)) : result ; 

    res.status(201);
    res.json(result) ; 
})

app.get('/redirect',(req , res)=>{
    res.redirect('https://www.google.com/')
})



app.listen(port , ()=>{
    console.log('started the server on this ', port);
})