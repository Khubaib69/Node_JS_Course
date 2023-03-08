const express = require('express');
const router = express.Router();

// this is used when we want to pass file name in the res.sendFile() it will join the path sequencly
// in windows we have / but in linux we have \
const path = require('path');


router.get('/', (req, res, next) => {
    console.log("This always run");
    next();
})


// any route other than /add-product will lead to the following path
router.get('/', (req, res, next) => {
    // console.log("I am middle ware 2 ...");
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
    // __dirname is the global path from our os to this project and views and shop.html are here in project,path will automatically concat it
})
module.exports = router;