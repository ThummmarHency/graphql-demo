import { gql } from "@apollo/client";
const GET_LOCATIONS = gql`
  {
    locations {
      name
      id
      photo
    }
  }
`;

const getAuthorList = gql`
  {
    authors {
      name
      id
    }
  }
`;

const ADD_REVIEW = gql`
  mutation Mutation($locationReview: LocationReviewInput) {
    submitReview(locationReview: $locationReview) {
      message
    }
  }
`;

const LOCATION_DETAIL = gql`
  query ($id: ID!) {
    location(id: $id) {
      name
      photo
      description
      reviewsForLocation {
        id
        comment
        rating
      }
    }
  }
`;
export { GET_LOCATIONS, getAuthorList, ADD_REVIEW, LOCATION_DETAIL };
