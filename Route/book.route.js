import getBook from "../Controller/book.controller.js";
import express from 'express'

const router = express.Router();

router.get('/', getBook)

export default router;