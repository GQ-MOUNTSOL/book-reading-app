import { Book, IBook } from '../models/book.model';

export class BookController {
  // Add a new book to the database
  public async addBook(
    title: string,
    author: string,
    genre: string,
    description: string
  ): Promise<IBook> {
    const newBook = new Book({ title, author, genre, description });
    return await newBook.save();
  }

  // Retrieve all books from the database
  public async getBooks(): Promise<IBook[]> {
    return await Book.find();
  }

  // Retrieve recommended books (e.g., books with genre 'Motivational')
  public async recommendBooks(): Promise<IBook[]> {
    return await Book.find({ genre: 'Motivational' });
  }
}