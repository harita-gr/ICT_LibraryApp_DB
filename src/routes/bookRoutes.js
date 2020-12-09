const express = require('express');
const booksRouter = express.Router();
//write called function
function router(nav){

var books = [
    {
        title: "Tom and Jerry",
        author: "Joseph Barbara",
        genre: "Cartoon",
        img: "tom.jpeg"
    },
    {
        title: "Harry Potter",
        author: "J K Rowling",
        genre: "Fantasy",
        img: "harry.jpg"
    },
    {
        title: "Paathumayude Aadu",
        author: "Basheer",
        genre: "Drama",
        img: "basheer.jpeg"
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