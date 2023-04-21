const express = require('express');
const router = express.Router();
const Func1 = require('../controllers/TaskA.controller');
const async = require('hbs/lib/async');

const Token = "0cff46ebd9516f3ad4d6c31661d99a80b41d93c0c24b62e0896b4962731c23a5";
const UserManApiID = 656; 
//router.get('/', Func1 );
const THEobj = {
    title: "somthing1 jgs iarie ohiefh i",
    body: "Somthing mor542"

}

 router.get('/get_request/',(req,res) =>{
    Func1.getData(UserManApiID,Token).then(data => {console.log(data);
    res.end(JSON.stringify(data));
    });
    
}
 )
 router.post('/post_request/', (req,res) => {
     Func1.putData(UserManApiID,Token,THEobj).then(console.log("successfull"));
     res.end(JSON.stringify(THEobj));
 })

/* GET home page. */
router.get('/', (req, res) => {
   // Func1.getData(UserManApiID,Token).then(data => console.log(data));
    Func1.putData(UserManApiID,Token,THEobj).then(console.log("successfull"));
    
   
    res.render('index', { title: 'VICTORY' });  

});



module.exports = router;
