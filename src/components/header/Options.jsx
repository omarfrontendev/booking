import React, { useState } from 'react'
import Button from '../../UI/button/Button'
import { MdOutlineLaptopChromebook } from 'react-icons/md'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { BsCode } from 'react-icons/bs'
import Calendar from './Calendar'
import SearchOptions from './SearchOptions'
import  { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Options = () => {

  const navigate = useNavigate();
  const [searchPlace, setSearchPlace] = useState('');
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openControl, setOpenControl] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 1
  });

  const hadelOptions = (type, operation) => {
    setOptions(prev => {
      return {
        ...prev, 
        [type]: operation === 'i' ? options[type] + 1 : options[type] - 1
      }
    })
  }

  const sumitFormHandler = (e) => {
    e.preventDefault();
    navigate('/list', {state: {
      searchPlace,
      date,
      options
    }})
  }

  return (
    <form onSubmit={sumitFormHandler} className="options flex">
      <div className="option-box">
        <label htmlFor='search-input'><MdOutlineLaptopChromebook /></label>
        <input onChange={e => setSearchPlace(e.target.value)} value={searchPlace} id='search-input' type='text' placeholder='Where are you going?'/>
      </div>
      <div className="option-box">
        <FaRegCalendarAlt onClick={() => setOpenCalendar(!openCalendar)} />
        <span onClick={() => setOpenCalendar(!openCalendar)}>
          {`${format(date[0].startDate, "dd/MM/yyyy")} `}
           To 
          {` ${format(date[0].endDate, "dd/MM/yyyy")}`}
          </span>
        {openCalendar && <Calendar date={date} setDate={setDate} />}
      </div>
      <div className="option-box">
        <div className="option-box" onClick={() => setOpenControl(!openControl)}>
        <BsFillPersonFill />
        <span>{options.adult} adult</span> - <span>{options.children} children</span> - <span>{options.room} room</span> <BsCode />
        </div>
        {openControl && <SearchOptions options={options} hadelOptions={hadelOptions} />}
      </div>
      <div className="option-box">
        <Button type='submit'>Search</Button>
      </div>
    </form>
  )
}

export default Options