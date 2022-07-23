import React, { useContext, useState } from 'react'
import AuthContext from '../../store/AuthProvider'
import Button from '../../UI/button/Button'
import Register from '../../components/register/Register'
import { TiInputChecked } from 'react-icons/ti'

const HotelContent = ({ title, locaton, imgs, desc, price }) => {

  const { auth } = useContext(AuthContext);
  const [openRegister, setOpenRegister] = useState(false);
  const [booked, setBooked] = useState(false)


  const bookingHandler = () => {
    auth.dummyToken ? setBooked(prev => !prev) : setOpenRegister(true)
  }

  return (

    <>
      <div className='hotel-content'>
        <div className="hotel-header flex space-between">
          <div className="hotel-left flex column">
            <h2>{title}</h2>
            <p className="subtitle">{locaton}</p>
            <h4>Excellent Loaction - 500m from center </h4>
          </div>
          <div className="hotel-right">
            <Button 
              onClick={bookingHandler}
              classes={`${booked ? 'booked' : ''}`}
            >
              {booked ? 
              <>
                Booked <TiInputChecked />
              </> : 'Reserve Or Book Now!'}
            </Button>
          </div>
        </div>
        <h4 className='gallary-title'>Book a star over ${price} at this property and get a free airport taxi</h4>
        <div className="hotel-gallary flex space-between">
          {imgs && imgs.map((img, i) => (
            <div key={i} className='hotel-img-gallary'>
              <img src={img} alt='Image' />
            </div>
          ))}
        </div>
        <div className="hotel-footer flex space-between">
          <div className="hote-description flex column">
            <h4>Stay in the heart of the city</h4>
            <p className="desc">{desc}</p>
          </div>
          <div className="hotel-card flex column">
            <h5>Perfect for a9-nights stay!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, inventore non.</p>
            <div className="hotel-price">
              ${price}<span>(9 nights)</span>
            </div>
            <Button 
              classes={`${booked ? 'booked' : ''}`}
              onClick={bookingHandler}
              >
              {booked ? 
              <>
                Booked <TiInputChecked />
              </> : 'Reserve Or Book Now!'}
              </Button>
          </div>
        </div>
      </div>
      {openRegister && <Register onclose={setOpenRegister} state={true} />}
    </>
  )
}

export default HotelContent