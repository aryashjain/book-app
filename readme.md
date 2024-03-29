This is a simple book management app that performs crud operations
- A user needs to register first, The registered user can add a book, update it delete it or get all books etc
- to start 
  - `npm i` 
  - `npm run dev`
- note you will have to have your own .env with `PORT` AND `MONGODB_URI`


-- `END POINTS` --
- /api/v1/books/addBook : to add a book
- /api/v1/books/getBooks : to get a book
- /api/v1/books/updateBook: update a book's description
- /api/v1/books/deleteBook : delete the book's data by its Id
- /api/v1/books/user: register a user and adds the id to cookie

--`middleware`--
- auth middleware -: checks for the user is registered or not 

-- Future Prospects / TO-Do
   - Login and logout for registered users
   - authentications via JWT and Bcrypt
   - can upload book image using multer
   and so on.

