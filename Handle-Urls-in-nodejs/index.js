// URL--> Uniform Resource Locator
// URL is a string that contains information about the location of a resource on the internet.
// https:--> secure protocol
// ws:--> web socket
// ftp:--> file transfer protocol
// www.ok.com:--> domain name
// /about:--> path
// ?name=rih... :--> query string
// #contact:--> fragment
// domain name is the IP.
// +....+... --> subdomain

const http= require("http");    
const fileSystem= require("fs");
const url= require("url");

const myServer= http.createServer((req, res)=>{
    if(req.url === "/favicon.ico"){
        return res.end();
    }
    const log=`${Date.now()}--> ${req.url} New Reques Received\n`;
    fileSystem.appendFile("log.txt", log, (err, data)=>{
        switch (req.url){
            case "/":
                res.write("Home Page");
                break;
            case "/about":
                res.write("About Page");
                break;
            case "/contact":
                res.write("Contact Page");
                break;
            default:
                res.write("404 Page Not Found");
                break;
        }
    });

});
myServer.listen(3000, ()=> console.log("Executed"));

// documentation--> https://www.npmjs.com/

// https://www.npmjs.com/package/url

// to install url package --> npm install url or npm i url
// the above command will install the url package in the node_modules folder and
            // also add the dependency in the package.json file.





// const http= require("http");
// const fileSystem= require("fs");
// const url= require("url");

const myServer2= http.createServer((req, res)=>{
    if(req.url=== "/favicon.ico"){
        return res.end();
    }
    const log= `${Date.now()}--> ${req.url} New Request Received\n`;
    const myURL= url.parse(req.url, true);
    console.log(myURL);

    fileSystem.appendFile("log.txt", log, (err, data)=>{
        switch(myURL.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                // const queryParameter= res.end("HEY THERE rih THIS SIDE")
                const userName=myUrl.query.myName;
                res.end(`hi, ${userName}`);
                break;
            case "/search":
                const searchQuery= myURL.query.search_query;
                res.end(`You have searched for ${searchQuery}`);
        default:
                req.end("404 Not Found");
        }
    });
}); 

// creating a server
myServer2.listen(4000, ()=> console.log("All done."));













