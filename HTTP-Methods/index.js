const http = require('http');
const fileSystem = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        return res.end();
    }

    const log = `${Date.now()} - ${req.method} - ${req.url} New Request received\n`;
    const myURL = url.parse(req.url, true);  // Corrected the variable name to 'myURL'
    console.log(myURL);

    fileSystem.appendFile('log.txt', log, (err) => {  // Removed 'data' parameter as it is unnecessary
        if (err) {
            console.error("Error writing to log file", err);
            res.end("Server Error");
            return;
        }
        switch (myURL.pathname) {  // Corrected the variable name to 'myURL'
            case "/":
                // res.end("Welcome to the Home Page");
                if(req.method === 'GET') {
                    res.end("Welcome to the Home Page");
                }
                break;
            case "/about":
                const userName = myURL.query.name;  // Corrected the variable name to 'myURL'
                res.end(`Welcome to the About Page ${userName}`);
                break;
            case "/contact":
                res.end("Welcome to the Contact Page");
                break;
            case "/search":
                const searchQuery = myURL.query.search_query;  // Corrected the variable name to 'myURL'
                res.end(`You searched for ${searchQuery}`);
                break;
            case "/signup":
                if(req.method === 'GET') {
                    res.end("This is a sign up page");
                }
                else if(req.method === 'POST') {

                    //Data base query to save the user details
                    res.end("You have signed up successfully");

                }
                else{
                    res.end("Method not allowed");
                }
                break;
            default:
                res.end("404 Page Not Found");
        }
    });
});

myServer.listen(3000, () => {
    console.log("Server is running on port 3000");
});
















