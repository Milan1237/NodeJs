//eventEmitters is a class which is used to handle custom events
const eventEmitter = require('events')
const myEmitter = new eventEmitter() ; 


myEmitter.on('greet' , (name)=>{
    console.log('hello ' , name)
}) ; 
myEmitter.on('greet' , (name)=>{
    console.log('Welcome ' , name)
}) ; 

//both emmiter will run
myEmitter.emit('greet' , 'Milan');
