const express = require('express');
const router = express.Router();
const Func1 = require('../controllers/TaskA.controller');
const async = require('hbs/lib/async');

const Token = "0cff46ebd9516f3ad4d6c31661d99a80b41d93c0c24b62e0896b4962731c23a5";
const UserManApiID = 649; 
//router.get('/', Func1 );
const THEobj = {
    title: "somthing1",
    body: "Somthing mor542"

}

/* GET home page. */
router.get('/', (req, res) => {
    Func1.getData(UserManApiID,Token).then(data => console.log(data));
    Func1.putData(UserManApiID,Token,THEobj).then(console.log("successfull"));
    
   
    res.render('index', { title: 'VICTORY' });  

});

router.get('/get_request/',() => Func1.getData(UserManApiID,Token).then(data => console.log(data)))
router.post('/post_request/', () => Func1.putData(UserManApiID,Token,THEobj).then(console.log("successfull")))


module.exports = router;
