import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Book from "./Book";
import { books } from "./books";

function BookList() {
  function getBook(id) {
    const book = books.find((item) => item.id === id);
    console.log(book);
  }

  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {/* <EventExample /> */}
        {books.map((book, index) => {
          // return <Book book={book} key={book.id} />; or Line 1026
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
