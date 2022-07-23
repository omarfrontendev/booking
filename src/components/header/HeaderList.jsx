import React from 'react'
import { FaBed } from 'react-icons/fa'
import { FaPlane } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { FaTaxi } from 'react-icons/fa'

const HeaderList = () => {

  const list = [
    {
      id: 1,
      text: 'Stays',
      icon: <FaBed />
    },
    {
      id: 2,
      text: 'Flights',
      icon: <FaPlane />
    },
    {
      id: 3,
      text: 'Car rentals',
      icon: <AiFillCar />
    },
    {
      id: 4,
      text: 'Attractions',
      icon: <FaBed />
    },
    {
      id: 5,
      text: 'Airport taxis',
      icon: <FaTaxi />
    }
  ]

  return (
    <ul className='header-list flex start'>
      {list.map(item => (
        <li key={item.id} className='flex'>
          {item.icon}
          {item.text}
        </li>
      ))}
    </ul>
  )
}

export default HeaderList