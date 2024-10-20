import React, { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInputChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { title: title, author: author };
    setNewBook(updatedBook);
    setBooks((prevState) => [...prevState, updatedBook]);
    setTitle("");
    setAuthor("");
    setNewBook({ title: "", author: "" });
  };
  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <label htmlFor="title">Title</label>
        <form onSubmit={handleSubmit}>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleTitleInputChange}
          ></input>
          <label htmlFor="Author">Author</label>
          <input
            id="author"
            type="text"
            name="author"
            value={author}
            onChange={handleAuthorInputChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        </div>
        <ul>
          {books.map((book) => (
            <div className="bookCard" key={book.title}>
              <h3>{`Title: ${book.title}`}</h3>
              <p>{`Author: ${book.author}`}</p>
            </div>
          ))}
        </ul>
      </div>
  );
};

export default Bookshelf;
