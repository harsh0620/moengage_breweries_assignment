import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const ReviewForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    rating: 1,
description:""
  });
  const {createReviewPost}=useAppContext()
  const breweryId=useParams();
  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }
  const { rating,description } = formData;
  const review={rating,description,breweryId}
  const handleSubmit = (e) => {
    e.preventDefault();
    createReviewPost(review)
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center w-full mb-4">
                <label
                  className="text-left w-full text-black text-lg font-medium"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <select
            id="rating"
            name="rating"
            className="mt-2 w-full h-10 border border-gray-300 rounded
            transition duration-150 ease-in-out focus:text-gray-700
             focus:bg-white focus:border-slate-600 p-2"
            value={rating}
            required={true}
            onChange={onChange}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
              </div>
        <div className="flex flex-col items-center w-full mb-4">
          <label  className="text-left w-full text-black text-lg font-medium" htmlFor="description">
            Review Description
          </label>
          <textarea
            id="description"
            name="description"
            required={true}
            className="mt-2 w-full h-10 border border-gray-300 rounded
            transition duration-150 ease-in-out focus:text-gray-700
             focus:bg-white focus:border-slate-600 p-2"
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
