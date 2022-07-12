import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { LOCATION_DETAIL } from "../query-component/Queries";
import AddReview from "./AddReview";
const BookDetail = ({ locationId }) => {
  const [cmtdata, setCmtdata] = useState({});
  const { data, loading, error } = useQuery(LOCATION_DETAIL, {
    variables: {
      id: locationId,
    },
    // fetchPolicy: "network-only",
  });

  console.log("data1", data);
  return (
    <>
      <div className="book_detail">
        {!loading ? (
          <>
            <AddReview locationId={locationId} locationData={cmtdata} />
            {/* <button className="add_cmt_btn">Add comment</button> */}
            <h2>{data?.location?.name}</h2>
            <ul>
              <img
                width="400"
                height="250"
                alt="location-reference"
                src={`${data?.location.photo}`}
              />
              <p>{data?.location?.description}</p>
            </ul>
            {data?.location?.reviewsForLocation.length !== 0 &&
              data?.location?.reviewsForLocation && (
                <>
                  <p>Comment related to this location : </p>
                  <ul>
                    {data?.location?.reviewsForLocation?.map((review) => {
                      return (
                        <>
                          <li key={review?.id}>{review?.comment}</li>
                          <button onClick={() => setCmtdata(review)}>
                            Edit
                          </button>
                        </>
                      );
                    })}
                  </ul>
                </>
              )}
          </>
        ) : (
          <p>location loading...</p>
        )}
      </div>
    </>
  );
};

export default BookDetail;
