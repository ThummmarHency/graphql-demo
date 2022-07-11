import React from "react";
import { gql, useQuery } from "@apollo/client";
// import { graphql } from "react-apollo";
const getBookList = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBookList);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log("data", data);
  return (
    <div>
      <ul id="book_list">
        <li>Book name</li>
      </ul>
    </div>
  );
};

export default BookList;
