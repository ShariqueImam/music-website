import React from "react";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";
const SwagsList = ({ swagData }) => {
  return (
    <div className="flex flex-wrap w-[95%] md:w-[80%] mx-auto items-center justify-center">
      {swagData.map((singleItem) => {
        return (
          <Link to={`/swags/${singleItem.id}`}>
            <div className="flex flex-wrap w-[90vw] md:w-[23vw] items-center justify-center">
              <SingleCard swagData={singleItem} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SwagsList;