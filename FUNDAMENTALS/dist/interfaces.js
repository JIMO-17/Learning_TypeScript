"use strict";
// What is Interface in TypeScript
// de la siguiente manera se hace uso de la interface
const book = {
    id: 12,
    title: 'Lorem ipsum dolor sit amet',
    author: 'Jimo'
};
/* -------------------------------------------- */
const books = [];
/* -------------------------------------------- */
function getBooks() {
    return { id: 23, title: "testing TS", author: "jimito" };
}
const myBook = getBooks();
// myBook.id
/* -------------------------------------------- */
function createBook(book) {
    return book;
}
const newBook = {
    id: 43,
    title: 'Lorem ips',
    author: 'jess',
    coAuthor: 'jimm'
};
createBook(newBook);
