import React from 'react'
import Spinner from '../../UI/spinner/Spinner'

const HotelLazy = () => {
  return (
    <div className="hotel-lazy flex column">
        <div className="lazy-header flex space-between">
          <div className="lazy-left flex column">
            <div className="lazy h2"></div>
            <div className="lazy"></div>
            <div className="lazy"></div>
          </div>
          <div className="lazy-right flex">
            <div className="lazy button-lazy"></div>
          </div>
        </div>
        <div className="lazy"></div>
        <div className="lazy-galary">
          <div className="lazy box">
            <Spinner />
          </div>
          <div className="lazy box">
            <Spinner />
          </div>
          <div className="lazy box">
            <Spinner />
          </div>
          <div className="lazy box">
            <Spinner />
          </div>
          <div className="lazy box">
            <Spinner />
          </div>
          <div className="lazy box">
            <Spinner />
          </div>
        </div>
        <div className="lazy-header flex space-between">
          <div className="lazy-left flex column">
            <div className="lazy h2"></div>
            <div className="lazy"></div>
            <div className="lazy"></div>
            <div className="lazy"></div>
            <div className="lazy"></div>
          </div>
          <div className="lazy-right flex">
            <div className="lazy card-lazy"></div>
          </div>
        </div>
    </div>
  )
}

export default HotelLazy