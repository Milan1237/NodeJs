const fs = require('fs');

fs.writeFile('./demoByMilan.txt' , 'Hello this is Milan Kumar Das ' , (err)=>{
    if(err){
        console.log(err);
    }
})

fs.appendFile('./demoByMilan.txt' ,'Milan is software engineer' , (err)=>{
    if(err) console.log(err);
    console.log('saved');
} )

fs.rename('./subha.js' , './milan.js' , (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file renamed from subha.js to milan.js');
    }

})


fs.open('./demoByMilan.txt' , 'w' ,(err ,file)=>{
    console.log('this is file', file) ; 
})

fs.unlink('./delete.txt' , (err , file)=>{
    if(err) console.log(err);
    console.log('file deleted');
})