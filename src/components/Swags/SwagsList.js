import React from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
const SwagsList = ({ swagData }) => {
  return (
    <div className="flex flex-wrap w-[95%] md:w-[80%] mx-auto">
      {swagData.map((singleItem) => {
        return (
          <Link to={`/swags/${singleItem.id}`}>
            <SingleCard swagData={singleItem} />
          </Link>
        );
      })}
    </div>
  );
};

export default SwagsList;
