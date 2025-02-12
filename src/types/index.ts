export interface Book {
    title: string;
    author: string;
    genre: string;
    description: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    readingList: Book[];
}