import { Router, Application, Request, Response } from 'express';
import { BookController } from '../controllers/book.controller';

const router = Router();
const bookController = new BookController();

export function setBookRoutes(app: Application): void {
  // Attach all API endpoints under /api/books
  app.use('/api/books', router);

  // API: Add a new book
  router.post('/', async (req: Request, res: Response) => {
    try {
      const { title, author, genre, description } = req.body;
      const result = await bookController.addBook(title, author, genre, description);
      res.status(201).json({ message: 'Book added successfully', book: result });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });

  // API: Get all books
  router.get('/', async (req: Request, res: Response) => {
    try {
      const books = await bookController.getBooks();
      res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });

  // API: Get recommended books
  router.get('/recommendations', async (req: Request, res: Response) => {
    try {
      const recommendations = await bookController.recommendBooks();
      res.status(200).json(recommendations);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  });
}