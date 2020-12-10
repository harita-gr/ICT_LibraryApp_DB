//MAIN SERVER

const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

//Reuse NavBar

const index_nav =[
    {link:'/index',name:'Home'},
    {link:'/userlogin',name:'Sign In'},
    {link:'/userRegister',name:'Sign Up'}
];

const nav = [
    {link:'/home',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addBook',name:'Add Book'},
    {link:'/addAuthor',name:'Add Author'},
    {link:'/logout',name:'Logout'}
];

//Title Reuse
const title = "Good Reads Library"

//File Seperation

const validateRouter = require('./src/routes/validateRoutes') (index_nav,title);
const booksRouter = require('./src/routes/bookRoutes') (nav,title); //passing nav array to bookroutes.js
const authorRouter = require('./src/routes/authorRoutes') (nav,title);
const addAuthorRouter = require('./src/routes/addAuthorRoutes') (nav,title);
const addBookRouter = require('./src/routes/addBookRoutes') (nav,title)
// we can't use require for ejs

app.use(express.static('./public'));
app.set('view engine','ejs'); //set view engine
app.set('views','./src/views'); //set ejs path

app.use('/',validateRouter); // Index,SignIn,SignUp,Logout pages
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addAuthor',addAuthorRouter);
app.use('/addBook',addBookRouter);

//HOME
app.post('/home',function(req,res){
    res.render("home",
      {
          nav,
          title
      }   
    );
});

app.get('/home',function(req,res){
    res.render("home",
      {
          nav,
          title
      }   
    );
});


app.listen(port,()=> {console.log("Server Ready at "+port)});