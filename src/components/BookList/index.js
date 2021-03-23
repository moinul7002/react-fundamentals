import React from "react";
import bookData from "./data";
import Book from "./bookComponent";

import "./index.css";

const mapAllBooks = bookData.map((singleBook) => {
  return <Book key={singleBook.id} {...singleBook} />;
});

const BookList = () => {
  return <section className="booklist">{mapAllBooks}</section>;
};

export default BookList;
