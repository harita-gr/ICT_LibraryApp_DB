const express = require('express');
const authorRouter = express.Router();
//write called function
function router(nav,title){

var authors = [
    {
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        books: ["The Lord of the Rings","The Hobbits"],
        img: "tolkien.jpeg"
    },
    {
        author: "J.K Rowling",
        genre: "Fantasy",
        books: ["Harry Potter","Fantastic Beasts and Where to Find them"],
        img: "jk.jpeg"
    },
    {
        author: "James Clear",
        genre: "Self-Help",
        books: ["Atomic Habits"],
        img: "clear.jpeg"
    }
    ]

//Router for Authors
authorRouter.get('/',function(req,res){
    res.render("authors",
    {
       nav,
       title: 'Authors',
       authors
   } 
    );
});

// for single author page
authorRouter.get('/:i',function(req,res){
   const id = req.params.i;
   res.render('author',{
       nav,
       title: 'Author',
       author: authors[id]
   })
});

     return authorRouter;
}
//acts as calling function as well
module.exports = router;