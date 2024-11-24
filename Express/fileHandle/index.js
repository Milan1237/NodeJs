import express from 'express'
import path from 'path'
import multer from 'multer'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

//initializing storage ; 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/upload');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+ path.extname(file.originalname));
    },
    
})

//initialize upload middleware

const upload = multer({
    storage
});


app.post('/submit', (req , res)=>{
    const {name , email} = req.body;
    res.json({name , email});
})

app.post('/upload' , upload.single('file') , (req,res)=>{
    console.log(req.file);
    res.json({ filename: req.file.filename });
}) 

app.listen(port , ()=>{
    console.log('server listening on port 5000');
})