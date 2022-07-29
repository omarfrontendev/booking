import React, { useContext, useState } from 'react'
import Button from '../../UI/button/Button'
import Container from '../../UI/Container'
import HeaderList from './HeaderList'
import Nav from './Nav'
import Options from './Options'
import Register from '../register/Register';
import AuthContext from '../../store/AuthProvider'

import './header.css'


const Header = ({ type }) => {

  const [openRegister, setOpenRegister] = useState(false);
  const { auth } = useContext(AuthContext);

  return (
    <header className={`${type === 'list' ? 'headerList' : ''}`}>
      <Container>
        <Nav />
        {/* <HeaderList /> */}
        {type !== 'list' && 
        <>
          <h1 className="header-title">A lifetime of discounts? it's Genius.</h1>
          <p className="header-p">
            Get rewardedfot your travels - unlock instant saving of 10% or more with a free account
          </p>
          {auth?.user ? <h3 className='welcome-user'>Welcome {auth?.user}</h3> : <Button onClick={() => setOpenRegister(true)}>Sign in / Register</Button>}
          <Options />
        </>
        }
      </Container>
      {openRegister && <Register onclose={setOpenRegister} state={false} />}
    </header>
  )
}

export default Header