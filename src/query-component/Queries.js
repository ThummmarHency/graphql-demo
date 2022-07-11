import { gql } from "@apollo/client";
const getAuthorList = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getBookList = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation ($name: String!, $gerne: String!, $authorId: ID!) {
    addBook(name: $name, gerne: $gerne, authorId: $authorId) {
      name
      id
    }
  }
`;

const bookDetailList = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      gerne
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
export { getBookList, getAuthorList, addBookMutation, bookDetailList };
