"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBookRoutes = void 0;
const express_1 = require("express");
const book_controller_1 = require("../controllers/book.controller");
const router = (0, express_1.Router)();
const bookController = new book_controller_1.BookController();
function setBookRoutes(app) {
    // Attach all API endpoints under /api/books
    app.use('/api/books', router);
    // API: Add a new book
    router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, author, genre, description } = req.body;
            const result = yield bookController.addBook(title, author, genre, description);
            res.status(201).json({ message: 'Book added successfully', book: result });
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    }));
    // API: Get all books
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield bookController.getBooks();
            res.status(200).json(books);
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    }));
    // API: Get recommended books
    router.get('/recommendations', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const recommendations = yield bookController.recommendBooks();
            res.status(200).json(recommendations);
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    }));
}
exports.setBookRoutes = setBookRoutes;
