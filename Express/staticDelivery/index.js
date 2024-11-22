import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const port = 3000 ; 
const currentFile = fileURLToPath(import.meta.url);
app.use(express.static(path.join( path.dirname(currentFile)  , 'public'))) ; 


app.get('/',(req , res)=>{
    res.send('./index.html');
})

app.listen(port , ()=>{
    console.log('server running on port' , port);
})