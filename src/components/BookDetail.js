import { useQuery } from "@apollo/client";
import React from "react";
import { bookDetailList } from "../query-component/Queries";
const BookDetail = ({ bookId }) => {
  console.log("bookId", bookId);
  const { data, loading, error } = useQuery(bookDetailList, {
    variables: {
      id: bookId,
    },
  });
  console.log("data1", data);
  return (
    <>
      <div className="book_detail">
        {data?.book ? (
          <>
            <h2>{data?.book?.name}</h2>
            <ul>
              <li>Gerne : {data?.book?.gerne}</li>
            </ul>
            <p>Other books by this author :</p>
            <ul>
              {data?.book?.author?.books?.map((author) => {
                return <li key={author?.id}>{author?.name}</li>;
              })}
            </ul>
          </>
        ) : (
          <p>No book selected</p>
        )}
      </div>
    </>
  );
};

export default BookDetail;
