import { Book } from "../models/book.model.js";


const getBooks = async(req,res)=>{
 try {
    const {author, year} = req.body;
    if(!author && !year){
        res.status(403).json({"error":"pls send author or year"});
    }
    const books = await Book.find({
    $or:[{year},{author}]
    })
    if(!books)    res.status(403).json({"error":"unable to get book pls try again"});
    res.status(200).json(books);

 } catch (error) {
    res.status(403).json({"error":error})
 }
}


const addBook = async(req,res)=>{
    try {
        const {title, author, year, description} = req.body;
        console.log(req.body)
        console.log(title,author,year, description)
        if(!title|| ! author || !year) {
          // error
          res.status(400).json({"error":"pls send valid title author and year"});
         
        }
        const resp = await Book.create({title,author,year,description})
        if(!resp)
        {

            console.log(resp)
            res.status(400).json({"error":"unable to add book"});
        }
        res.status(200).json(resp);   
    } catch (error) {
        res.status(500).json(error)
    }

}
const updateBook = async(req,res)=>{
    try {
       const {_id, description} = req.body
       if(!_id, !description){
            res.status(400).json({error:" send the id and description of the book to be updated"})
       }
       const resp = await Book.findByIdAndUpdate(_id,{
        $set:{
            description
        }
       },{
        new:true
       })
       console.log(resp);

       return res.status(200).json(resp); 
    } catch (error) {
        res.status(500).json(error)
    }
    
}
const deleteBook = async(req,res)=>{
    try {
        const {_id, description} = req.body
        if(!_id){
            res.status(400).json({error:" send the id of the book to be deleted"})
        }
        const resp = await Book.findByIdAndDelete(id);
        console.log(resp);
        return res.status(200).json(resp); 
     } catch (error) {
         res.status(500).json(error)
     }
}





export{
    getBooks,
    addBook,
    updateBook,
    deleteBook
}