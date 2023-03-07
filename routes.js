const fs = require('fs');

const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    // we are setting the method in the form method in html

    if (url === '/') {
        // this is how html was written but it is also complex way of writing it
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST" ><input name="message" type="text"><button type="submit">Send</button></input></form></body>');
        res.write('/<html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];

        // req.on is a event checker/listener and data from html comes in buffer (in chunks) and we combine that chunk  so we can work on data
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // once all the data has come then we combine it into one big data
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        })

        // fs is a file system and we will use it to create a file and set text in it dummy son
        fs.writeFileSync('message.txt', "DUMMY SON");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }


    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello From My Node Server<h1></body>');
    res.write('/<html>');
}

module.exports = requestHandler;