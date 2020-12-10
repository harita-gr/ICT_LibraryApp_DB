const express = require('express');
const validateRouter = express.Router();
//write called function
function router(nav,title){

  var books = [
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        img: "lotr.jpeg"
    },
    {
        title: "Harry Potter",
        author: "J K Rowling",
        genre: "Fantasy",
        img: "harry.jpg"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-Help",
        img: "at.jpeg"
    }
    ]

//INDEX PAGE
validateRouter.get('/',function(req,res){
    // __dirname  gives current dir name
    res.render("index",
      {
          nav,
          title,
          books
      }   
    );
});

validateRouter.get('/index',function(req,res){
    res.render("index",
      {
          nav,
          title,
          books
      }   
    );
});

//LOGIN PAGE

validateRouter.get('/userlogin',function(req,res){
    res.render("login",
      {
          nav,
          title
      }   
    );
});


//REGISTER
validateRouter.get('/userRegister',function(req,res){
    res.render("signup",
      {
          nav,
          title
      }   
    );
});

//LOGOUT
validateRouter.get('/logout',function(req,res){
  res.render("logout",
    {
        nav,
        title
    }   
  );
});



     return validateRouter;
}
//acts as calling function as well
module.exports = router;