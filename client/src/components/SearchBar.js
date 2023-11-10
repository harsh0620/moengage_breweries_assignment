import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAppContext } from '../context/appContext';
import Loader from './Loader';
const SearchBar = () => {
    const {getBreweries,isLoading}=useAppContext();
  const [selectedOption, setSelectedOption] = useState('by_city');
  const [searchTerm, setSearchTerm] = useState('');

  async function handleSearch(e) {
    e.preventDefault();
    if(searchTerm?.length===0)
    {
        toast.error("Please enter some search text.");
        return;
    }
    const searchParameter={category:selectedOption,value:searchTerm};
    await getBreweries(searchParameter);
   
  };
if(isLoading)
{
    return <Loader/>
}
  return (
    <div className="p-4 ">
        <div className='flex justify-center'>
      <select
        className="p-2 border rounded"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="by_city">City</option>
        <option value="by_name">Name</option>
        <option value="by_type">Type</option>
      </select>
      <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder={`Search By ${selectedOption === 'by_city' ? 'City' : selectedOption === 'by_name'?'Name':'Type'}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded ml-2"
      />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded ml-2">
          Search
        </button>
      </form>
      </div>

     
    </div>
  );
};

export default SearchBar;
