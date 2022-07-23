import React from 'react'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail'
import Container from '../../UI/Container'

import './home.css'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Featured />
      </Container>
      <Mail />
      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default Home