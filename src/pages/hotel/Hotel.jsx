import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Container from '../../UI/Container'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import FetchData from '../../hooks/use-api'
import HotelLazy from './HotelLazy'

import './hotel.css'
import HotelContent from './HotelContent'

const Hotel = ({ data }) => {

  const params = useParams();

  // const {
  //   data: hotel,
  //   isLoading,
  //   error
  // } = FetchData(`searchResult/${params.ID}`)

  let hotel = data.find(d => d.id === +params.ID);

  if(!hotel) {
    return <h1>Something Wrong!</h1>
  };

  return (
    <>
    <Header type='list' />
    <Container>
      <section className="hotel">
        <HotelContent {...hotel} />
        {/* {isLoading ? <HotelLazy /> : <HotelContent {...hotel} />}
        {error && <p className='error-message'>Something Wrong!</p>} */}
      </section>
    </Container>
      <Mail />
      <Container>
      <Footer />
      </Container>
  </>
  )
}

export default Hotel