const express = require('express');
const booksRouter = express.Router();
//write called function
function router(nav){

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

//Router for Books
booksRouter.get('/',function(req,res){
    res.render("books",
    {
       nav,
       title: 'Books',
       books
   } 
    );
});

// for single book page
booksRouter.get('/:i',function(req,res){
   const id = req.params.i;
   res.render('book',{
       nav,
       title: 'Books',
       book: books[id]
   })
});
     return booksRouter;
}
//acts as calling function as well
module.exports = router;