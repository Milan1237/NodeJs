import express from 'express';

const app = new express();
const port = 3000;
let id = 1;

let todos = [];
app.use(express.json())
app.get('/', (req, res) => {
    if (todos.length) {
        res.status(200);
        res.send(todos);
    } else {
        res.status(404);
        res.send('no todos in the list')
    }


});


app.post('/add-todo', (req, res) => {
    console.log(req.body);
    const {
        title,
        message
    } = req.body;
    const todo = {
        id: id++,
        title: title,
        message: message
    };

    todos.push(todo);
    if (todo) {
        res.status(201);
        res.send(todo);
    } else {
        res.status(404);
        res.send('error');
    }
})

app.get('/todos/:id', (req, res) => {
    const {
        id
    } = req.params;
    const todo = todos.find(tod => tod.id === Number(id));
    console.log(todo);
    if (!todo) {
        res.status(404).send('todo not found');
    } else {
        res.status(202).send(todo);
    }

})

app.put('/update/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        title,
        message
    } = req.body;
    const index = todos.findIndex((value) => value.id == id);

    if (index == -1) {
        res.status(404).send('could not find it');
    } else {
        todos[index] = {
            id: id,
            title: title,
            message: message
        }

        res.status(203).send('update successfull');
    }

})

app.delete('/delete/:id', (req , res)=>{
    const {id} = req.params ; 
    const index = todos.findIndex((value) => value.id == id);
    if(index == -1 ){
        res.status(404).send('id not found');
    }else{
        todos.splice(index , 1);
        res.status(204).send('deletion successful');
    }
})


app.listen(port, '127.0.0.1', (res, req) => {
    console.log(`server running at 127.0.0.1:${port}`);
})