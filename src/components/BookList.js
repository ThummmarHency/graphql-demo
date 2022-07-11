import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { getBookList } from "../query-component/Queries";
import BookDetail from "./BookDetail";
// import { graphql } from "react-apollo";

const BookList = () => {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(getBookList);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <ul id="book_list">
        {data?.books?.map((book) => {
          return (
            <li
              key={book?.id}
              onClick={() => {
                setSelected(book?.id);
              }}
            >
              {book?.name}
            </li>
          );
        })}
      </ul>
      <BookDetail bookId={selected} />
    </div>
  );
};

export default BookList;
