import express from 'express'
import bodyParser from 'body-parser'
import {
    check,
    validationResult
} from 'express-validator';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/submit" method="post">
        <input type="text" placeholder="enter your name" name="name">
        <input type="email" placeholder="enter your mail" name="email">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`)
})

app.post('/submit', [
    check('name').isLength({
        min: 2,
        max: 6
    }).withMessage('the length of the name should be more than 2 and less than equals to 6').escape(),
    check('email').isEmail().withMessage('give a valid email')
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            errors: error.array()
        });
    }
    const {
        name,
        email
    } = req.body;
    res.status(201).send({
        name,
        email
    });
})
app.listen(port, () => {
    console.log('the app is live at localhost:', port);
})