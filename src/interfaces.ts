// What is Interface in TypeScript

// Es una definicion de contrato de codigo, una interface define el "forma" de la data, con la que vamos a trabajar, es una especie de molde
// utiliza la palabra reservada interface

interface Book {
    id: number;
    title: string;
    author: string;
    coAuthor?: string;  /* propiedad opcional con el ? */
    isLoan?: (id: number) => void; /* Tambien se puede implementar Metodos en una interface */
}

// de la siguiente manera se hace uso de la interface
const book: Book = {
    id: 12,
    title: 'Lorem ipsum dolor sit amet',
    author: 'Jimo'
};
/* -------------------------------------------- */

const books: Book[] = [];

/* -------------------------------------------- */

function getBooks() : Book {
    return {id: 23, title: "testing TS", author: "jimito"};
}
const myBook = getBooks();
// myBook.id


/* -------------------------------------------- */

function createBook(book: Book) : Book {
    return book;
}

const newBook = {
    id: 43,
    title: 'Lorem ips',
    author: 'jess',
    coAuthor: 'jimm'
}
createBook(newBook);