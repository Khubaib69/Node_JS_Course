const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>404 not found son</h1>')
    res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
});

const server = http.createServer(app);
server.listen(3000)