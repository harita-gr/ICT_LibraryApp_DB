const express = require('express');
const addBookRouter = express.Router();
//write called function
function router(nav,title){
    
//Router to add book
addBookRouter.get('/',function(req,res){
    res.render("addBook",
      {
          nav,
          title
      }   
    );
});
     return addBookRouter;
}
//acts as calling function as well
module.exports = router;