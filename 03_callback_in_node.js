const fs = require('fs');

//reading a file synchronously
 
/*
console.log('starting execution');
const data = fs.readFileSync('./03_demoText.txt');
console.log(data.toString());
console.log('execution end');
*/


//asynchronus a file reading
console.log('starting execution');
fs.readFile('./03_demoText.txt' , (ferr , fileData)=>{
        ferr && console.log(ferr);
        console.log(fileData.toString());
})
console.log('execution end');