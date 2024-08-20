// console.log("hello worls");

// var a=40;
// const b=5;
// let c=10;
// console.log(a+b+c);  //55


// function myfunc(){
//     var a=40;
//     const b=5;
//     let c=10;
//     console.log(a+b+c);  //55
// }

// we waant to import some other file lets sat math.js here


const buffer = require('buffer');                              // buffer is a built in package
const math = require('./exporting techniques/math.js');                     // ./ is used to import the file from the same directory    
                                            // this will completely run the script.js file and
                                        //               return its output through there.



// console.log("math value is ", add(3,5));                      // from the math.js file we have exported a function and 
                                                                // and here we can use that function.



console.log("math value is ", math.addFunction(3,5));                      // from the math.js file we have exported a function and
console.log("math value is ", math.subFunction(3,5));                      // from the math.js file we have exported a function and

                               

// or we can use... destructuring method

const{addFunction , subFunction}=require('./exporting techniques/math.js');
console.log("math value after using destructuring method ", addFunction(3,5));                      // from the math.js file we have exported a function and






