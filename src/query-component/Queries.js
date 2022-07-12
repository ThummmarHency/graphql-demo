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

const ADD_REVIEW = gql`
  mutation Mutation($locationReview: LocationReviewInput) {
    submitReview(locationReview: $locationReview) {
      message
    }
  }
`;
const UPDATE_REVIEW = gql`
  mutation Mutation($locationReview: LocationReviewInput) {
    submitReview(locationReview: $locationReview) {
      message
    }
  }
`;
const LOCATION_DETAIL = gql`
  query ($id: ID!) {
    location(id: $id) {
      id
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
export { GET_LOCATIONS, ADD_REVIEW, LOCATION_DETAIL, UPDATE_REVIEW };
