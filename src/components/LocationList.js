import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../query-component/Queries";
import LocationDetail from "./LocationDetail";
// import { graphql } from "react-apollo";

const BookList = () => {
  const [selected, setSelected] = useState(null);
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  console.log("data :>> ", data);
  return (
    <div>
      <ul id="book_list">
        {data?.locations?.map((location) => {
          return (
            <li
              key={location?.id}
              onClick={() => {
                setSelected(location?.id);
              }}
            >
              <img
                width="400"
                height="250"
                alt="location-reference"
                src={`${location.photo}`}
              />
              <p>{location?.name}</p>
            </li>
          );
        })}
      </ul>
      {selected && <LocationDetail locationId={selected} />}
    </div>
  );
};

export default BookList;
