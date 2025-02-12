"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const book_routes_1 = require("./routes/book.routes");
const app = (0, express_1.default)();
const port = 3000;
// Connect to MongoDB database
mongoose_1.default
    .connect('mongodb://localhost:27017/bookReadingApp')
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Set view engine to EJS and point to source views directory
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
// Optionally, serve static assets from a public folder (create this folder in src)
// app.use(express.static(path.join(__dirname, '../src/public')));
// Home route – renders the homepage (e.g. index.ejs)
app.get('/', (req, res) => {
    res.render('index');
});
// Setup additional routes
(0, book_routes_1.setBookRoutes)(app);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
