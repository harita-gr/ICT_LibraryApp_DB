const express = require('express');
const addAuthorRouter = express.Router();
//write called function
function router(nav,title){
    
//Router to add author
addAuthorRouter.get('/',function(req,res){
    res.render("addAuthor",
      {
          nav,
          title
      }   
    );
});
     return addAuthorRouter;
}
//acts as calling function as well
module.exports = router;