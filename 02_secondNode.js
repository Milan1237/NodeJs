const argument=process.argv;//return an array result: [executionable path, executed file path , ...arguments]
console.log(argument);

function sum(a , b){
    return a+b ; 
}

const [,,a,b] = argument ; 
console.log(`sum of a and b is ${sum(Number(a),Number(b))}`);