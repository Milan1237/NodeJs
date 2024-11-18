const filePath = './todo.json';
const fs = require('fs');
const {
    json
} = require('stream/consumers');

const command = process.argv[2];
const value = process.argv[3];

function saveTask(data){
    const dataJson = JSON.stringify(data);
    fs.writeFileSync(filePath , dataJson);
}

function loadTask() {
    try {
        const data = fs.readFileSync(filePath);
        const dataJson = data.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}


function addTodo() {
    const data = loadTask();
    data.push({value});
    saveTask(data);
}

function removeTodo(){
    const task = loadTask();
    const data = task.filter((val,index)=> value != index+1 );
    console.log(data);
    saveTask(data);
}

function listTodo(){
    const task = loadTask();
    task.forEach(element => {
        console.log(element);
    });
}

if (command == 'add') {
    const data = addTodo();
} else if (command == 'remove') {
    removeTodo();
} else if (command == 'list') {
    listTodo();
} else {
    console.log('please enter valid command');
}