import React from 'react'
import FetchData from '../../hooks/use-api'
import {BsFillStarFill} from 'react-icons/bs'
import Spinner from '../../UI/spinner/Spinner';

const GuestsLove = () => {

  const stars = [1,2,3,4,5];

  const {
    data,
    isLoading,
    error
  } = FetchData('guestsLove');


  return (
    <div className='guests-love flex'>
      {isLoading ? 
      <div className='lazyFeatures flex'>
        <div className="lazyFeature flex">
          <Spinner /> 
        </div>
        <div className="lazyFeature flex">
          <Spinner /> 
        </div>
      </div>
        :
      <>
        {data.map(i => (
          <div className='single' key={i.id}>
            <img src={i.img} />
            <div className="details">
              <p>{i.des.length > 30 ? `${i.des.slice(0, 30)}...` : i.des}</p>
              <p>{i.city}</p>
              <div className="ratin flex start">
                <div>
                  <span>{i.rate} / 5</span>
                  <span>
                    {stars.map(star => <BsFillStarFill key={star} className={`${star <= i.rate ? 'inrate' : ''}`} />)}
                  </span>
                </div>
                <span className='status'>{i.status}</span>
              </div>
              <span className='reviews'>{i.reviews} reviews</span>
            </div>
          </div>
        ))}
        {error && <p className='error-message'>Something Wrong!</p>}
      </>  
      }
    </div>
  )
}

export default GuestsLove