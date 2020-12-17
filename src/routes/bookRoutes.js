const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/BookData');
//write called function
function router(nav){

// var books = [
//     {
//         title: "The Lord of the Rings",
//         author: "J.R.R. Tolkien",
//         genre: "Fantasy",
//         img: "lotr.jpeg"
//     },
//     {
//         title: "Harry Potter",
//         author: "J K Rowling",
//         genre: "Fantasy",
//         img: "harry.jpg"
//     },
//     {
//         title: "Atomic Habits",
//         author: "James Clear",
//         genre: "Self-Help",
//         img: "at.jpeg"
//     }
//     ]

//Router for Books
booksRouter.get('/',function(req,res){
    Bookdata.find() //catch the values
    .then(function(books){
    res.render("books",
        {
        nav,
        title: 'Books',
        books,
        admin:false
        } );
    })
    .catch();
});
// for single book page
booksRouter.get('/:i',function(req,res){
   const id = req.params.i;
   Bookdata.findOne({_id:id})
   .then(function(book){

    res.render('book',{
        nav,
        title: 'Books',
        book,
        admin:false
    });

   })
   .catch();
   
});
     return booksRouter;
}
//acts as calling function as well
module.exports = router;