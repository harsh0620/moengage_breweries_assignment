import React, { useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useAppContext } from "../context/appContext";
import Loader from "./Loader";

const Review = () => {
  const { breweriesReviews, isLoading } = useAppContext();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-2xl mx-auto mt-4 border rounded-lg p-4 mb-2">
    <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="flex flex-col ">
        {breweriesReviews?.map((review, index) => {
          return (
              <ReviewCard review={review} key={index}/>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
