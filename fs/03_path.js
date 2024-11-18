const path = require('path');

const url = './main/index/dj/milan.js'

//path.baseName(); return the last part of the url

console.log(path.basename(url)) ; // milan

//to check wheather path is absalute or not
console.log(path.isAbsolute(url)); //false

//extracting the extension
console.log('the name of the extension is ',path.extname(url));

//joining each path to one
console.log('using path.join ' , path.join('milan' , 'kumar' , 'sonu.js'))

//to make the path absalulte
console.log('making the url absalute ' , path.resolve(url) );