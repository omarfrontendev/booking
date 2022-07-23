import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import Button from '../../UI/button/Button';
import { useNavigate } from 'react-router-dom';

import './hotels.css'

const SingleHotel = ({ imgs, title, level, rate, distance, price, id, desc, booked }) => {

  const stars = [1,2,3,4,5];

  const navigate = useNavigate()

  return (
    <div className='single-hotel flex start'>
      <div className="img">
        <img src={imgs[0]} alt="" />
      </div>
      <div className="details flex column">
        <div className="single-hotel-head flex space-between">
          <h3>{title}</h3>
          <div className='flex'>
            <span>{level}</span>
            <span>{rate}/5</span>
          </div>
        </div>
        <span>
          {stars.map(star => <BsFillStarFill key={star} className={`${star <= rate ? 'inrate' : ''}`} />)}
        </span>
        <span className='dist'>{distance}m from center</span>
        <p className='taxi'>Free airport taxi</p>
        <p className='h-state'>
          Studio Apartment with Air conditioning
          <span>${price}</span>
        </p>
        <div className="btns flex">
          <button className='cancel'>Free Cancellation</button>
          <Button onClick={() => navigate(`${id}`, {state: {
            imgs, title, level, booked, rate, distance, price, desc
          }})} calsses='visit'>See Availability</Button>
        </div>
      </div>
    </div>
  )
}

export default SingleHotel