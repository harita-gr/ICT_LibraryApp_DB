const express = require('express');
const authorRouter = express.Router();
//write called function
function router(nav){

var authors = [
    {
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        books: ["The Lord of the Rings","The Hobbits"],
        img: "tom.jpeg"
    },
    {
        author: "Oscar Wilde",
        genre: "Drama",
        books: ["The Importance of Being Earnest","Lady Windermere's Fan"],
        img: "tom.jpeg"
    },
    {
        author: "James Clear",
        genre: "Self-Help",
        books: ["Atomic Habits"],
        img: "tom.jpeg"
    }
    ]

//Router for Books
authorRouter.get('/',function(req,res){
    res.render("authors",
    {
       nav,
       title: 'Authors',
       authors
   } 
    );
});

// for single book page
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