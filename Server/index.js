// HTTP server is for Handling incoming HTTP requests and sends back HTTP responses.

const http= require("http");

/*
const myServer= http.createServer((req, res)=>{});

create server is a method that takes a callback function as an argument.
it accepts two arguments, request and response.  

*/

const myServer=http.createServer((req, res)=>{                                  //req, res are the parameters of the callback function and this is called request handler.
    console.log("New Request Received");                                        //req
    res.end("Hello From the Server");                                           //res

});


myServer.listen(8000, ()=> console.log("Server Started successfully! :)"));     
    // port number is 8000; port is like a door to the server.
                       // here the callback function will execute only when the server is working properly.



// to run the server, go to the terminal and type node index.js or we have creted a script in package.json file,
// so we can type npm run server.
// to see the output, go to the terminal and type npm run server.
// to stop the server, press ctrl+c in the terminal.

// to see the output in the browser, go to the browser and type localhost:8000.

// the moment we visit the localhost:8000, the server will send a response "Hello From the Server" to the browser.
// and in the terminal, it will show "New Request Received".



const headerServer=http.createServer((req, res)=>{
    console.log(req.headers);                                    // headers contains the information about the request or request user.
    res.end("<h1>Hello From the Server...:)</h1>");
});
headerServer.listen(3000,()=> console.log("Server Started Successfully! :)"));





// Mini-task
// create a log file

// const http= require("http");
const fileSystem= require("fs");

const logServer= http.createServer((req, res)=>{
    const log=`${Date.now()} - ${req.url} - ${req.method}: A new request received. \n`;
    fileSystem.appendFile("log.txt", log, (err, data)=>{
        res.end("Log File Created Successfully! :)");
    });          // appendFile is used to append the data to the file.  
});
logServer.listen(4000, ()=> console.log("Server Started Successfully! and log file created :)"));


// date.now() is used to get the current date and time.
// req.url is used to get the url or path of the request.
// req.method is used to get the method of the request.







// creating server to handle log file for the another page request, like about page, contact page etc.

const logServer2= http.createServer((req, res)=>{

    const log=`${Date.now()} - ${req.url} - ${req.method}: A new request received. \n`;
    fileSystem.appendFile("log.txt", log, (err, data) =>{


        //creating multiroute server using switch case.
        switch(req.url){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                res.end("About Page: RiH this side.");
                break;
            case "/contact":
                res.end("Contact Page");
                break;
            default:
                res.end("404 Page Not Found");
        };
    });
});

logServer2.listen(5000, ()=> console.log("Server Started Successfully! and log file created :)"));


// always try to do non-blocking code, because it is faster than blocking code.





