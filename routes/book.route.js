import {Router} from 'express'
import { getBooks, addBook, updateBook, deleteBook } from '../controller/book.controller.js';
import {verifyUser} from '../middleware/auth.middleware.js'

const router = Router();
router.use(verifyUser)
router.route("/getBooks").get(getBooks)
router.route("/addBook").post(addBook)
router.route("/updateBook").patch(updateBook)
router.route("/deleteBook").delete(deleteBook)


export default router