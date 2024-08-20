function add(a,b)
{
    return a+b;
}
console.log(add(5, 5)); //10

// now export the function into the main file ie script.js
module.exports=add;                     //module.export=function_name;

// similarly;

function sub(a,b){
    return a-b;
}
module.exports=sub;
// here the problem is that we can only export one function at a time and this time sub function overrides it.
// to solve this we can use objects to export multiple functions at a time.

// so we can use objects to export multiple functions at a time.


module.exports={
    function_name:return function,
    subFunction:sub
}
    


module.exports={
    addFunction:add,
    subFunction:sub
}



// another way to export multiple functions at a time is by using the following syntax:
exports.addVarible=(a,b)=> a+b;
exports.subVariable=(a,b)=> a-b;



//=================================================================================================



// preferred way     module,exports={function_name, function_name, function_name};

module.exports={ add, sub};






