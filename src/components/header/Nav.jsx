import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../store/AuthProvider';
import Button from '../../UI/button/Button'
import Register from '../register/Register';

const Nav = () => {

  const { auth, setAuth } = useContext(AuthContext);
  const [openRegister, setOpenRegister] = useState(false);
  const [login, setLogin] = useState(true);


  const logoutHandler = async () => {
    try {

      const res = await fetch(`http://localhost:8000/auth/${auth.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        WithCredintails: true,
      });

      setAuth({})
      localStorage.removeItem('auth');

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <nav className='flex space-between'>
        <Link to='/' className="logo">
          Logo
        </Link>
        {auth?.dummyToken ?
          <Button
            onClick={logoutHandler}
            classes='bgk-white'
          >
            Logout
          </Button>
        :
          <div className="btns">
            <Button classes='bgk-white' onClick={() => {
              setLogin(true)
              setOpenRegister(true)
            }}>Register</Button>
            <Button classes='bgk-white' onClick={() => {
                setLogin(false)
                setOpenRegister(true)
              }}>Login</Button>
          </div>
        }
      </nav>
      {openRegister && <Register onclose={setOpenRegister} state={!login} />}
    </>
  )
}

export default Nav