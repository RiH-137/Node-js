// file handling is a system that allows you to read and write files on your computer.

const filesystem=require('fs');
// fs is a core module in node.js that allows you to work with the file system on your computer.


//(filePath, data);     ---> Syncronous
filesystem.writeFileSync('file.txt','Hello World');


// overwrite the file
filesystem.writeFileSync('file.txt','RiH this side... Hope u r there to listen me...');


// Async
filesystem.writeFile("./asyncText.txt", "Hello World", (err) => {});






// const result=filesystem.readFile('contact.txt', 'utf-8');
// console.log(result); // undefined and error


const result=filesystem.readFileSync('contact.txt', 'utf-8');
console.log(result); 

// if there is a Sync function, the code flow will be normal else it will be async and throw error.

// on the other hand ASYNC function throws an error and expect a callback function to handle the error.
filesystem.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});



// Append
const append=filesystem.appendFileSync('file.txt', 'This is appended text\n okokok go...');
console.log(append);


// similarly for async
filesystem.appendFile('file.txt', `This is ${Date.now()}  appended text\n okokok go...`, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data appended');
});




// delete file
filesystem.unlinkSync('asyncText.txt');


// rename file
filesystem.renameSync('file.txt', 'newFile.txt');


// check if file exists
const exists=filesystem.existsSync('newFile.txt');
console.log(exists); // true



















