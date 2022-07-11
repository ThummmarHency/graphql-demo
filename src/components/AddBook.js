import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  addBookMutation,
  getAuthorList,
  getBookList,
} from "../query-component/Queries";

// import { graphql } from "react-apollo";

const AddBook = () => {
  const [bookDetail, setBookDetail] = useState({
    authorId: "",
    name: "",
    gerne: "",
  });
  const [addBook, { data1, loading1, error1 }] = useMutation(addBookMutation);
  const { loading, error, data } = useQuery(getAuthorList);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data >>", data);

  const getBookDetail = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name: bookDetail?.name,
        gerne: bookDetail?.gerne,
        authorId: bookDetail?.authorId,
      },
      refetchQueries: [{ query: getBookList }],
    });
    setBookDetail({
      authorId: "",
      name: "",
      gerne: "",
    });
    console.log("bookDetail", bookDetail);
  };

  return (
    <div>
      <form id="add_form" onSubmit={getBookDetail}>
        <div className="field">
          <label>Book name : </label>
          <input
            type="text"
            onChange={(e) => {
              setBookDetail({ ...bookDetail, name: e.target.value });
            }}
            value={bookDetail?.name}
          />
        </div>
        <div className="field">
          <label>Gerne : </label>
          <input
            type="text"
            onChange={(e) => {
              setBookDetail({ ...bookDetail, gerne: e.target.value });
            }}
            value={bookDetail?.gerne}
          />
        </div>
        <div className="field">
          <label>author : </label>
          <select
            onChange={(e) => {
              setBookDetail({ ...bookDetail, authorId: e.target.value });
            }}
            value={bookDetail?.authorId}
          >
            <option value="">Select author</option>
            {data?.authors?.map((author) => {
              return (
                <option key={author?.id} value={author?.id}>
                  {author?.name}
                </option>
              );
            })}
          </select>
        </div>

        <button className="btn">+</button>
      </form>
    </div>
  );
};

export default AddBook;
