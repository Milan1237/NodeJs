var os = require('os');
var fs = require('fs');
console.log('Platform :', os.platform());
console.log('arch :', os.arch());

fs.writeFile('./demoFile.txt', 'hello Milan' , (err)=>{
    console.log(err);
})