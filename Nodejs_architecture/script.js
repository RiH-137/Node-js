const fileSystem=require('fs');

console.log(1);

// blocking code
fileSystem.writeFileSync('file.txt', 'Hello World');
console.log(2);

// output 
/*
1
(---file.txt---)
2
*/



// None blocking code =--> Async
fileSystem.writeFile('file.txt', 'Hello World', (err) => {
    
});

console.log(2);

// output
/*
1
2
(---file.txt---)
*/


