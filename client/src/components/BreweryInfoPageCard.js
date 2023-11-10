import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Loader from './Loader';
const BreweryInfoPageCard = () => {
  const {breweriesInfo,isLoading}=useAppContext();
  const {
    name,
    brewery_type,
    address_1,
    city,
    state_province,
    postal_code,
    country,
    longitude,
    latitude,
    phone,
    website_url,
    state,
    street
  } = breweriesInfo;
if(isLoading)
{
  return <Loader />
}
  return (
    <div className="max-w-2xl mx-auto mt-4 border rounded-lg p-4 mb-2">
      <div className='flex justify-between'>
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-gray-700 text-lg mb-2">{brewery_type?.toUpperCase()}</p>
      </div>
      <p className="text-gray-700 text-lg mb-2">
      {address_1} {city}, {state_province},{state},{street}, {postal_code},{country}
      </p>
      <p className="text-gray-700 text-lg mb-2">
        Longitude: {longitude}, Latitude: {latitude}
      </p>
      <div className='flex justify-between'>
      <p className="text-gray-700 text-lg mb-2">Phone: {phone}</p>
      <p className="text-gray-700 text-lg mb-2">
        Website: <a href={website_url} target="_blank" rel="noopener noreferrer">{website_url}</a>
      </p>
      </div>
    </div>
  );
};

export default BreweryInfoPageCard;
