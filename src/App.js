import React from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

export default function App() {
  return (
    <div id="main">
      <h1>Reading List</h1>
      <BookList />
      <AddBook />
    </div>
  );
}
