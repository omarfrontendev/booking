import React from 'react'

const ImageViewer = ({ img, onClose }) => {
  return (
    <div className='overlay' onClick={() => onClose(false)}>
      <button onClick={() => onClose(false)}>X</button>
      <img src={img} />
    </div>
  )
}

export default ImageViewer