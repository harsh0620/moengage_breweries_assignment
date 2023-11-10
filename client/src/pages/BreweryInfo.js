import React, { useEffect } from 'react'
import BreweryInfoPageCard from '../components/BreweryInfoPageCard'
import Review from '../components/Review'
import ReviewForm from '../components/ReviewForm'
import { useAppContext } from '../context/appContext'
import { useParams } from 'react-router-dom'

const BreweryInfo = () => {
  const {getBreweriesInfo,getBreweriesReviews}=useAppContext();
  const {breweryId}=useParams()
  useEffect(()=>{
    getBreweriesInfo(breweryId);
    getBreweriesReviews(breweryId);
  },[])
  return (
    <div className='py-4'>
      <div className='text-4xl font-bold text-center my-4'>
        Brewery Information
      
      </div>
      <BreweryInfoPageCard/>
      <Review/>
      <ReviewForm/>
    </div>
  )
}

export default BreweryInfo