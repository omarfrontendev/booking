import React, { useContext, useEffect, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import FetchData from '../../hooks/use-api'
import AuthContext from '../../store/AuthProvider'

const LoginForm = ({ onclose, setRegister }) => {

  const { setAuth } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  // const { data: allRegisters } = FetchData('register');

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const submitFormHandler = async e => {
    e.preventDefault();

    // let alreadyUser = false;
    let id = '';

    // allRegisters.forEach(r => {
    //   if(r.user === user && r.pwd === pwd) {
    //     alreadyUser = true
    //     id = r.id
    //   }
    // });
    
    // if(!alreadyUser) {
    //   setErrMsg('Missing user or password!')
    //   return;
    // }

    // try {

      // const res = await fetch('http://localhost:5000/auth', {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Accept": "application/json"
      //   },
      //   WithCredintails: true,
      //   body: JSON.stringify({ user, pwd }),
      // })
      // const data = await res.json();

      // const getUser = await fetch(`http://localhost:5000/register/${id}`);
      // const userID = await getUser.json()

      setAuth({
        user: user,
        pwd: pwd,
        // dummyToken: userID.dummyToken,
        id
      });

      localStorage.setItem('auth', JSON.stringify({
        user: user,
        pwd: pwd,
        // dummyToken: userID.dummyToken,
        id
      }))

      setSuccess(true)

    // } catch (err) {
    //   console.log(err)
    //   setSuccess('Login Failed!')
    // }
  }

  return (
    <>
      {success ?
        <div className="register-form success-screen">
          <h2>Hello {user}</h2>
          <button onClick={() => onclose(false)}>Go To Booking</button>
        </div>
      :
        <form className='register-form' onSubmit={submitFormHandler}>
          <button className='close-btn' type='button' onClick={() => onclose(false)}>
            <IoMdCloseCircle />
          </button>
          {errMsg && <p className='error-message'>{errMsg}</p>}
          <h3>Login</h3>
          <div className="input-control">
            <label htmlFor="userName">Username:</label>
            <input
              id='userName' 
              type="text" 
              placeholder='Type your name' 
              autoComplete={'false'}
              value={user}
              onChange={e => setUser(e.target.value)} 
            />
          </div>
          <div className="input-control">
            <label htmlFor="paw">Password:</label>
            <div style={{position: 'relative'}}>
              <input 
                id='paw' 
                type={showPwd ? 'text' : 'password'} 
                placeholder='Type your passowrd' 
                value={pwd}
                onChange={e => setPwd(e.target.value)}
              />
              <button 
                onClick={() => setShowPwd(prev => !prev)}
                type='button'>
                {showPwd ? <BiHide /> : <BiShow />}
              </button>
            </div>
          </div>
          <button 
            disabled={!user || !pwd}
            type='submit'
          >
            Login
          </button>
          <p>Need An Account?</p>
          <button 
            onClick={() => setRegister(false)}
            type='button'
          >Sign Up</button>
        </form>
        
      }
    </>
  )
}

export default LoginForm