import React from 'react';
import {BsFillStarFill} from 'react-icons/bs';
const ReviewCard = ({ review }) => {
  const { reviewerName, rating, description } = review;

  return (
    <div className="mx-auto bg-white border rounded-lg mb-1">
      <div className="px-4 py-2">
        <div className="flex items-center mb-2 justify-between">
          <h3 className="text-lg font-bold">{reviewerName}</h3>
          <div className="ml-2 flex items-center">
            <span className="text-yellow-500">
              Rating:{rating}
            </span>
          </div>
        </div>
        <div className="text-gray-700 text-wrap text-sm flex flex-col">
          <h3 className='font-bold'>Description:</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
