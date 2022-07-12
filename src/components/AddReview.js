import React, { useEffect, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import {
  ADD_REVIEW,
  GET_LOCATIONS,
  LOCATION_DETAIL,
} from "../query-component/Queries";

// import { graphql } from "react-apollo";

const AddReview = ({ locationId, locationData }) => {
  console.log("locationData :>> ", locationData);
  const [locationDetail, setlocationDetail] = useState({
    comment: "",
    rating: "",
    locationId: locationId,
  });
  useEffect(() => {
    locationData &&
      setlocationDetail({
        comment: locationData?.comment,
        rating: locationData?.rating,
        locationId: "rev-9",
      });
  }, [locationData]);

  const [addReview] = useMutation(ADD_REVIEW);

  const getlocationDetail = (e) => {
    e.preventDefault();
    if (!locationDetail?.comment.length) {
      alert("Comment field required");
      return;
    }
    if (!locationDetail?.rating) {
      alert("rating field required");
      return;
    }
    addReview({
      variables: {
        locationReview: {
          comment: locationDetail?.comment,
          rating: parseInt(locationDetail?.rating),
          locationId: locationId,
        },
      },

      refetchQueries: [
        { query: GET_LOCATIONS },
        {
          query: LOCATION_DETAIL,
          variables: {
            id: locationId,
          },
        },
      ],
    });
    locationData?.id &&
      setlocationDetail({
        comment: "",
        rating: "",
        locationId: "",
      });
    console.log("locationDetail", locationDetail);
  };
  const rating = [1, 2, 3, 4, 5];
  return (
    <div>
      <form id="add_form" onSubmit={getlocationDetail}>
        <h1>Add comment here</h1>
        <div className="field">
          <label>Comment : </label>
          <input
            type="text"
            onChange={(e) => {
              setlocationDetail({ ...locationDetail, comment: e.target.value });
            }}
            value={locationDetail?.comment}
          />
        </div>
        <div className="field">
          <label>Rating : </label>
          <select
            onChange={(e) => {
              setlocationDetail({
                ...locationDetail,
                rating: e.target.value,
              });
            }}
            value={locationDetail?.rating}
            // value={locationDetail?.rating}
          >
            <option value="">Select review</option>
            {rating?.map((rate, index) => {
              return (
                <option key={index} value={rate}>
                  {rate}
                </option>
              );
            })}
          </select>
        </div>
        <div className="field">
          <label>locationId : </label>
          <input type="text" value={locationId} disabled={!!locationId} />
        </div>
        {/* {locationData?.id && (
          <div className="field">
            <label>ReviewId : </label>
            <input
              type="text"
              value={locationData?.id}
              disabled={!!locationData?.id}
            />
          </div>
        )} */}
        <button className={"btn"}>+</button>
      </form>
    </div>
  );
};

export default AddReview;
