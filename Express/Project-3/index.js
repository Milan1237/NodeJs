import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url';

const app = express();
const port = 3000 ; 

const fileName = fileURLToPath(import.meta.url);
console.log(path.dirname(fileName));
app.set('views' , path.join(path.dirname(fileName) , 'views'));
app.set('view engine' , 'ejs' );

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to the home page!' });
  });

app.listen(port , ()=>{
    console.log('app is live in port' , port);
})