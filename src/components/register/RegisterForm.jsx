import React, { useState, useRef, useEffect, useContext } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { IoIosClose } from 'react-icons/io'
import { BsCheckLg } from 'react-icons/bs'
import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'
import FetchData from '../../hooks/use-api'
import AuthContext from '../../store/AuthProvider'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-o-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = ({ onclose, setRegister }) => {

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const [isLoading, setIsloading] = useState(false);
  // User Name: =

  const [user, setUser] = useState('');
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFoucus] = useState(false);

  useEffect(() => {
    !success && userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidUser(result);
  }, [user])

  // password

  const [pwd, setPwd] = useState('');
  const [validPwd, setVAlidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  // Confirm Password

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setVAlidPwd(result);
    const resultMatch = matchPwd === pwd;
    setValidMatch(resultMatch)
  }, [pwd, matchPwd]);

  // Error / Success; =

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg('')
  }, [pwd, user, matchPwd]);


  //  All Registers:=
  const { data: allergister } = FetchData('register');

  const submitHandler = async event => {
    event.preventDefault();

    const valid1 = USER_REGEX.test(user);
    const valid2 = PWD_REGEX.test(pwd);
    setIsloading(true)
    
    if(!valid1 || !valid2) {
      setErrMsg('Invalid Entry');
      return;
    };

    // dummy check User Name Taken:=

    let userNameTaken = false;
    let id ='';

    allergister.forEach(r => {
      if(r.user === user) {
        userNameTaken = true;
        id = r.id
      }
    });

    if(userNameTaken) {
      setErrMsg('username already Taken')
      setIsloading(false)
      return
    };
    
    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        WithCredintails: true,
        body: JSON.stringify({ user, pwd, dummyToken: Math.random()}),
      });
      const data = await res.json();
      setIsloading(false);
      setSuccess(true);

      const res2 = await fetch('http://localhost:5000/auth', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        WithCredintails: true,
        body: JSON.stringify({ user, pwd }),
      });

      setAuth({
        user: data.user,
        pwd: data.pwd,
        dummyToken: data.dummyToken,
        id
      });

      localStorage.setItem('auth', JSON.stringify({
        user: data.user,
        pwd: data.pwd,
        dummyToken: data.dummyToken,
        id
      }))
    }catch (err) {
      setErrMsg('Registration Failed')
      setIsloading(false)
    }
    setIsloading(false);
  }

  return (
    <>
        {success ?
        <div className="register-form success-screen">
          <h2>Hello {user}</h2>
          <button onClick={() => onclose(false)}>Go To Booking</button>
        </div>
         :
         <form className='register-form' onSubmit={submitHandler}>
          <button className='close-btn' type='button' onClick={() => onclose(false)}>
            <IoMdCloseCircle />
          </button>
          {errMsg && <p className='error-message'>{errMsg}</p>}
          <h3>Register</h3>
          <div className="input-control">
            <label htmlFor="userName">Username:
              {user && !validUser && <IoIosClose className='error-icon' />}
              {user && validUser && <BsCheckLg className='success-icon' />}
            </label>
            <input
              id='userName' 
              type="text" 
              placeholder='Type your name' 
              autoComplete={'false'}
              ref={userRef}
              value={user}
              onChange={e => setUser(e.target.value)} 
              onFocus={() => setUserFoucus(true)}
              onBlur={() => setUserFoucus(false)}
            />
            {userFocus && user && !validUser && 
            <p className='error-message'>
              4 to 24 Characters. <br/>
              Must begin with a letter. <br/>
              Letters, Numbers, underscores, hyphens allowed. 
            </p>}
          </div>
          <div className="input-control">
            <label htmlFor="paw">Password:
              {pwd && !validPwd && <IoIosClose className='error-icon' />}
              {pwd && validPwd && <BsCheckLg className='success-icon' />}
            </label>
            <div style={{position: 'relative'}}>
              <input 
                id='paw' 
                type={showPwd ? 'text' : 'password'} 
                placeholder='Type your passowrd' 
                value={pwd}
                onChange={e => setPwd(e.target.value)}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <button 
                onClick={() => setShowPwd(prev => !prev)}
                type='button'>
                {showPwd ? <BiHide /> : <BiShow />}
              </button>
            </div>
            {pwdFocus && pwd && !validPwd && 
            <p className='error-message'>
              8 to 24 Characters. <br/>
              Must includes uppercases & lowercases letters, anumber and special Characters. <br/>
              Allowed special Characters: ! @ # $ %
            </p>}
          </div>
          <div className="input-control">
            <label htmlFor="matchpaw">Conifrm Password:
              {matchPwd && !validMatch && <IoIosClose className='error-icon' />}
              {matchPwd && validMatch && <BsCheckLg className='success-icon' />}
            </label>
            <div style={{position: 'relative'}}>
              <input 
                id='matchpaw' 
                type={showPwd ? 'text' : 'password'}
                placeholder='Confirm your password'
                onChange={e => setMatchPwd(e.target.value)}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
                <button 
                  onClick={() => setShowPwd(prev => !prev)}
                  type='button'>
                  {showPwd ? <BiHide /> : <BiShow />}
                </button>
            </div>
            {matchFocus && matchPwd && !validMatch && 
            <p className='error-message'>
              Must match the first password input field.
            </p>}
          </div>
          <button 
           type='submit'
           disabled={!validUser || !validPwd || !validMatch}
          >
            {isLoading ? 'Loading...!' : 'Sign Up'}
          </button>
          <p>Already registered?</p>
          <button 
            onClick={() => setRegister(true)}
            type='button'
          >Sign in</button>
        </form>
         }
    </>
  )
}

export default RegisterForm