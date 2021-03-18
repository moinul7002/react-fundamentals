import React from "react";

const firstBook = {
  image: "",
  title: "Long Time No See",
  author: "Ana Hathaway",
};

const secondBook = {
  image: "",
  title: "Mi Amore",
  author: "Ana Hathaway",
};

const Book = ({ image, title, author }) => {
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

export default BookList;
