import React from 'react'

const SearchOptions = ({ options, hadelOptions }) => {
  return (
    <ul className='searchOptions flex column'>
      <li>
        <span>Adult</span>
        <div>
          <button type='button' disabled={options.adult < 1} onClick={() => hadelOptions('adult', 'd')}>-</button>
          <span>{options.adult}</span>
          <button type='button' onClick={() => hadelOptions('adult', 'i')}>+</button>
        </div>
      </li>
      <li>
        <span>Children</span>
        <div>
          <button type='button' disabled={options.children < 1} onClick={() => hadelOptions('children', 'd')}>-</button>
          <span>{options.children}</span>
          <button type='button' onClick={() => hadelOptions('children', 'i')}>+</button>
        </div>
      </li>
      <li>
        <span>Room</span>
        <div>
          <button type='button' disabled={options.room <= 1} onClick={() => hadelOptions('room', 'd')}>-</button>
          <span>{options.room}</span>
          <button type='button' onClick={() => hadelOptions('room', 'i')}>+</button>
        </div>
      </li>
    </ul>
  )
}

export default SearchOptions