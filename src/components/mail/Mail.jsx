import React from 'react'
import Container from '../../UI/Container'
import Button from '../../UI/button/Button'

import './mail.css'

const Mail = () => {
  return (
    <section className='mail'>
      <Container>
        <div className='mail-content flex column'>
          <h3 className="mail-title">Save time, Save money!</h3>
          <p>Sign up and we'll send the best deals to you</p>
          <div className="mail-control flex">
            <input type="email" placeholder='Your email' />
            <Button>Subscribe</Button>
          </div>
          <div className="flex start">
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox">Send me a link to get the FREE Booking.com app!</label>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Mail