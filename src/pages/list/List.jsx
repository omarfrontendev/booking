import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Button from '../../UI/button/Button'
import Container from '../../UI/Container'
import { useLocation } from 'react-router-dom'
import  { format } from 'date-fns'
import Calendar from '../../components/header/Calendar'
import Hotels from '../../components/hotels/Hotels'
import Mail from '../../components/mail/Mail'
import Footer from '../../components/footer/Footer'

import './list.css'

const List = ({data  }) => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.searchPlace)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openCalendar, setOpenCalendar] = useState(false);

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  // Get Data

  // const getData = async () => {
  //   setIsLoading(true)
  //   try {
  //     const res = await fetch(`http://localhost:5000/searchResult`);
  //     const data = await res.json();
  //     setError(false)
  //     setData(data);
  //     setIsLoading(false)
  //   }catch (error) {
  //     console.log(error)
  //     setIsLoading(false)
  //     setError(true)
  //   }
  //   setIsLoading(false)
  // }
  // useEffect(() => {
  //   getData();
  // }, [])


  // Form Action Handle

  const changeOptionsHandler = (name, value) => {
    // setOptions({
    //   ...options,
    //   [name]: value
    // })
  };

  const searchFormHandler = event => {
    event.preventDefault();
    // getData();
  };

  return (
    <>
      <Header type='list' />
      <Container>
        <div className="list-content">
          <div className="form" onSubmit={searchFormHandler}>
            <form className='flex column'>
              <h3>Search</h3>
              <div className="input-control">
                <label className='label' htmlFor="destination">Destination</label>
                <input 
                  className='input' 
                  type="text" 
                  value={destination}
                  onChange={e => setDestination(e.target.value)}
                  placeholder='Where are you going?' 
                  id='destination' 
                />
              </div>
              <div className="input-control">
                <p className='label'>Check-in date</p>
                <div style={{position: 'relative'}}>
                <p 
                  style={{cursor: 'pointer'}} 
                  className='input' 
                  onClick={() => setOpenCalendar(prev => !prev)}
                >
                {`${format(date[0].startDate, "dd/MM/yyyy")}  `}
                  To 
                  {`  ${format(date[0].endDate, "dd/MM/yyyy")} `}
                </p>
                {openCalendar && <Calendar date={date} setDate={setDate} />}
                </div>
              </div>
              <div className="form-options">
                <p className='label'>Options</p>
                <div className="option-control flex">
                  <div className='option-label'>Min price <span>(per night)</span></div>
                  <input 
                    onChange={e => changeOptionsHandler('min-price', e.target.value)}
                    defaultValue={options['min-price'] || 0}
                    type="number" 
                    min={0} 
                    step={1}
                  />
                </div>
                <div className="option-control flex">
                  <div className='option-label'>Max price <span>(per night)</span></div>
                  <input
                    onChange={e => changeOptionsHandler('max-price', e.target.value)}
                    defaultValue={options['max-price'] || 0} 
                    type="number" 
                    min={0} 
                    step={1}
                  />
                </div>
                <div className="option-control flex">
                  <div className='option-label'>Adult <span>(per night)</span></div>
                  <input 
                    onChange={e => changeOptionsHandler('adult', e.target.value)}
                    defaultValue={options['adult'] || 0}
                    type="number" 
                    min={0} 
                    step={1} 
                  />
                </div>
                <div className="option-control flex">
                  <div className='option-label'>Children <span>(per night)</span></div>
                  <input 
                    onChange={e => changeOptionsHandler('children', e.target.value)}
                    defaultValue={options['children'] || 0}
                    type="number" 
                    min={0} 
                    step={1} 
                  />
                </div>
                <div className="option-control flex">
                  <div className='option-label'>Room <span>(per night)</span></div>
                  <input 
                    onChange={e => changeOptionsHandler('room', e.target.value)}
                    defaultValue={options['room'] || 0}
                    type="number" 
                    min={0} 
                    step={1}
                  />
                </div>
              </div>
              <Button
                // classes={`${isLoading ? 'loading' : ''}`}
                type='submit'
              >
                {/* {isLoading ? 'Loading...!' : 'Search'} */}
                Search
              </Button>
            </form>
          </div>
          <div className="list">
            <Hotels hotels={data}  />
          </div>
        </div>
      </Container>
      <Mail />
      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default List