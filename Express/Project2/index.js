import express from 'express'

const app = new express()
const port = process.env.PORT || 4000
app.get('/' , (res , req , next)=>{
    console.log('hello user');
    next();
} , (req , res)=>{
    res.status(200);
    res.send('<h1>Hello user I am the protagonist of my life</h1>')
});

app.listen(port , '127.0.0.1' ,  ()=>{
    console.log('port is running on ' , port) ; 
} )