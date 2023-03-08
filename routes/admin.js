const express = require('express');
const router = express.Router();

const path = require('path');


// Router is same as app and it is used when we want to divide our code across different files and we can at the end combine then
router.get('/add-product', (req, res, next) => {
    // console.log("I am middle ware 1 ...");
    // res.send('<form action="/admin/add-product" method="POST" ><input name="message" type="text"><button type="submit">Send</button></input></form>')
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;