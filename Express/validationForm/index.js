import express from 'express'
import bodyParser from 'body-parser'
import { body , validationResult } from 'express-validator'
import cors from 'cors'


const app = express();
const port = 4000 ; 
const database = [];
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req , res)=>{
    res.send('hello');
})

app.post('/signup', body('name').trim().isLength({min: 1}).withMessage('please enter a valid name'),
body('password').isLength({min: 6}).withMessage('the min size should be more than 6 and should contain letter and number'),
(req , res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        res.status(400).json(errors); 
    }else{
        const {name , password} = req.body;
        database.push({name,password});
        console.log(database);
        res.status(201).json(database);
    };
    res.send('got it');
    console.log(errors);
    

})


app.listen(port, ()=>{
    console.log('server is up on ',port);
})