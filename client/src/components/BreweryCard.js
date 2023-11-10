import React from 'react';
import { useNavigate } from 'react-router-dom';

const BreweryCard = ({ brewery }) => {
  const {
    id,
    name,
    address_1,
    phone,
    website_url,
    rating,
    state,
    city,
  } = brewery;
const navigate=useNavigate();
  return (
    <div className="rounded-lg min-w-[500px] shadow-lg bg-white my-1 cursor-pointer" onClick={()=>navigate(`/breweryInfo/${id}`)}>
      <div className="px-6 py-4">
        <div className='flex justify-between'>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Rating: {rating}</p>
        </div>
        <div className='flex justify-between'>
        <p className="text-gray-700 text-base">{address_1}</p>
        <p className="text-gray-700 text-base">
        {city}, {state}
        </p>
        </div>
        
        <p className="text-gray-700 text-base">{phone}</p>
        <p className="text-gray-700 text-base">{website_url}</p>
       
       
      </div>
    </div>
  );
};

export default BreweryCard;
