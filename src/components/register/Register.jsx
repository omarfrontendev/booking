import React, { useState } from 'react'
import RegisterForm from './RegisterForm'

import './register.css'
import LoginForm from './LoginForm';

const Register = ({ onclose, state }) => {

  const [register, setRegister] = useState(state);

  return (
    <div className='register'>
      <div className="overlay">
        {!register ? <RegisterForm onclose={onclose} setRegister={setRegister} /> : <LoginForm onclose={onclose} setRegister={setRegister} />}
      </div>
    </div>
  )
}

export default Register