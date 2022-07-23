import React from 'react'
import SingleHotel from './SingleHotel'
import Spinner from '../../UI/spinner/Spinner'

const Hotels = ({ hotels, isLoading, error }) => {

  return (
    <div className='hotels'>
      {isLoading ?
        <div className="lazy-hotels flex column">
          <div className="lazy">
            <Spinner />
          </div>
          <div className="lazy">
            <Spinner />
          </div>
          <div className="lazy">
            <Spinner />
          </div>
          <div className="lazy">
            <Spinner />
          </div>
          <div className="lazy">
            <Spinner />
          </div>
        </div>
      : 
      <>
        {hotels.map(h => <SingleHotel key={h.id} {...h} />)}
      </>
      }
      {error && <p className='error-message'>Something Wrong!</p>}
    </div>
  )
}

export default Hotels