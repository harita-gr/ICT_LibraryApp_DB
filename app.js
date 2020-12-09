//MAIN SERVER

const express = require('express');
const app = express();
const port = process.env.PORT || 2000;

//Reuse NavBar
const nav = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addBook',name:'Add Book'},
    {link:'/addAuthor',name:'Add Author'},
    {link:'/logout',name:'Logout'}
];

//File Seperation

const booksRouter = require('./src/routes/bookRoutes') (nav); //passing nav array to bookroutes.js
const authorRouter = require('./src/routes/authorRoutes') (nav);
// we can't use require for ejs

app.use(express.static('./public'));
app.set('view engine','ejs'); //set view engine
app.set('views','./src/views'); //set ejs path
app.use('/books',booksRouter);
app.use('/authors',authorRouter);

//Router for Index page
app.get('/',function(req,res){
    // __dirname  gives current dir name
    res.render("index",
      {
          nav:[
              {link:'/userlogin',name:'Sign In'},
              {link:'/userRegister',name:'Sign Up'}
            ],
          title: 'Library'
      }   
    );
});

//LOGIN
app.get('/userlogin',function(req,res){
    res.render("login",
      {
          nav:[
              {link:'/userlogin',name:'Sign In'},
              {link:'/userRegister',name:'Sign Up'}
            ],
          title: 'Library'
      }   
    );
});

//REGISTER
app.get('/userRegister',function(req,res){
    // __dirname  gives current dir name
    res.render("signup",
      {
          nav:[
              {link:'/userlogin',name:'Sign In'},
              {link:'/userRegister',name:'Sign Up'}
            ],
          title: 'Library'
      }   
    );
});

//HOME
app.get('/home',function(req,res){
    res.render("home",
      {
          nav:[
              {link:'/books',name:'Books'},
              {link:'/authors',name:'Authors'},
              {link:'/addBook',name:'Add Book'},
              {link:'/addAuthor',name:'Add Author'},
              {link:'/logout',name:'Logout'}
            ],
          title: 'Library'
      }   
    );
});

//LOGOUT
app.get('/logout',function(req,res){
    res.render("logout",
      {
          nav:[
            {link:'/userlogin',name:'Sign In'},
            {link:'/userRegister',name:'Sign Up'}
            ],
          title: 'Library'
      }   
    );
});

//AUTHORS

app.get('/authors',function(req,res){
    res.render("authors",
      {
          nav:[
              {link:'/books',name:'Books'},
              {link:'/authors',name:'Authors'},
              {link:'/addBook',name:'Add Book'},
              {link:'/addAuthor',name:'Add Author'},
              {link:'/logout',name:'Logout'}
            ],
          title: 'Library'
      }   
    );
});

app.get('/addAuthor',function(req,res){
    res.render("addAuthor",
      {
          nav:[
              {link:'/books',name:'Books'},
              {link:'/authors',name:'Authors'},
              {link:'/addBook',name:'Add Book'},
              {link:'/addAuthor',name:'Add Author'},
              {link:'/logout',name:'Logout'}
            ],
          title: 'Library'
      }   
    );
});

app.get('/addBook',function(req,res){
    res.render("addBook",
      {
          nav:[
              {link:'/books',name:'Books'},
              {link:'/authors',name:'Authors'},
              {link:'/addBook',name:'Add Book'},
              {link:'/addAuthor',name:'Add Author'},
              {link:'/logout',name:'Logout'}
            ],
          title: 'Library'
      }   
    );
});

app.listen(port,()=> {console.log("Server Ready at "+port)});