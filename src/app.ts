import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { setBookRoutes } from './routes/book.routes';

const app = express();
const port = 3000;

// Connect to MongoDB database
mongoose
  .connect('mongodb://localhost:27017/bookReadingApp')
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine to EJS and point to source views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

// Optionally, serve static assets from a public folder (create this folder in src)
// app.use(express.static(path.join(__dirname, '../src/public')));

// Home route – renders the homepage (e.g. index.ejs)
app.get('/', (req, res) => {
  res.render('index');
});

// Setup additional routes
setBookRoutes(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});