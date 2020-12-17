const express = require('express');
const multer = require('multer');
// var upload = multer({dest:'./public/uploads'});

const adminRouter = express.Router();
const Bookdata = require('../model/BookData');
const Authordata = require('../model/AuthorData');

//Set storage engine - MULTER

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    cb(null , file.originalname);
}
});

// //initialize upload variable
var upload = multer({ storage: storage })
// const upload = multer({
//   storage:storage
// }).single('image');


//write called function
function router(nav,title){

    adminRouter.post('/',function(req,res){
        res.render("adminhome",
          {
              nav,
              title
          }   
        );
    });

    adminRouter.get('/',function(req,res){
        res.render("adminhome",
          {
              nav,
              title
          }   
        );
    });

    //BOOK

    adminRouter.get('/books',function(req,res){
      Bookdata.find() //catch the values
      .then(function(books){
      res.render("books",
          {
          nav,
          title: 'Books',
          books,
          admin:true
          } );
      })
      .catch();
  });

  // for single book page
  adminRouter.get('/books/:i',function(req,res){
  const id = req.params.i;
  Bookdata.findOne({_id:id})
  .then(function(book){

   res.render('book',{
       nav,
       title: 'Books',
       book,
       admin:true
   });

  })
  .catch();
  
});

    adminRouter.get('/addBook',function(req,res){
        res.render("addBook",
          {
              nav,
              title
          }   
        );
    });

    
    adminRouter.get('/addB',function(req,res){
      var item = {
         title: req.query.title,
         author: req.query.author,
         genre: req.query.genre,
         image: req.query.image
        }
        var book = Bookdata(item);
        book.save(); //save to DB
        res.redirect('/adminhome/books');
      });

    // AUTHOR

    //Router for Authors
    adminRouter.get('/authors',function(req,res){
  Authordata.find() //catch the values
  .then(function(authors){
  res.render("authors",
      {
      nav,
      title: 'Authors',
      authors,
      admin:true
      } );
  })
  .catch();
});

// for single author page
adminRouter.get('/authors/:i',function(req,res){
  const id = req.params.i;
  Authordata.findOne({_id:id})
  .then(function(author){

   res.render('author',{
       nav,
       title: 'Authors',
       author,
       admin:true
   });

  })
  .catch();
});

    //Router to add author
    adminRouter.get('/addAuthor',function(req,res){
    res.render("addAuthor",
      {
          nav,
          title
      }   
    );

    adminRouter.get('/addA',upload.single('image'),function(req,res){
      var item = {
         name: req.query.name,
         genre: req.query.genre,
         books: req.query.books,
         image: req.query.image
        }
        console.log('Files Uploaded: ');
        var author = Authordata(item);
        author.save(); //save to DB

        
        res.redirect('/adminhome/authors');
      });
    
});

adminRouter.get('/updateAuthor/:i',function(req,res){

  const id = req.params.i;
  Authordata.findOne({_id:id})
  .then(function(author){
   res.render('updateAuthor',{
       nav,
       title: 'Authors',
       author,
       admin:true
   });
  });
});

adminRouter.post('/updateA/:i',function(req,res){
  console.log('UPDATING',req.body);
  const id = req.params.i;
  var update = Authordata.findByIdAndUpdate(id,{
       name:req.body.name,
       genre:req.body.genre,
       image: req.body.image,
       books: req.body.books
  });
  update.exec(function (err,data){
    if(err) throw err;
    res.render("authors",
    {
        nav,
        title
        // success : "Record Updated Successfully!",
        
    }   
    );    
  })
});

adminRouter.get('/deleteAuthor/:i',function(req,res){
  
  const id = req.params.i;
  var del = Authordata.findByIdAndDelete(id);
    
  del.exec(function (err){
    if(err) throw err;
    res.redirect("/adminhome/authors");  
     
  })
});




     return adminRouter;
}
//acts as calling function as well
module.exports = router;