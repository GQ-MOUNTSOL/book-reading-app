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
exports.BookController = void 0;
const book_model_1 = require("../models/book.model");
class BookController {
    // Add a new book to the database
    addBook(title, author, genre, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = new book_model_1.Book({ title, author, genre, description });
            return yield newBook.save();
        });
    }
    // Retrieve all books from the database
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.Book.find();
        });
    }
    // Retrieve recommended books (e.g., books with genre 'Motivational')
    recommendBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield book_model_1.Book.find({ genre: 'Motivational' });
        });
    }
}
exports.BookController = BookController;
