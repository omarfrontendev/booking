import React, { useState } from 'react'
import ImageViewer from '../../UI/imageViewer/ImageViewer';
import Spinner from '../../UI/spinner/Spinner';

const Popular = ({ places, loading, error }) => {

  const [openImageViewer, setOpenImageView] = useState(false);
  const [image, setImage] = useState('');

  return (
    <>
      <div className='propular flex'>
          {loading ?
          <div className='lazyFeatures flex'>
            <div className="lazyFeature flex">
              <Spinner /> 
            </div>
            <div className="lazyFeature flex">
              <Spinner /> 
            </div>
          </div>
            : 
            <>
              {places.map(place => (
                <div 
                key={place.id} 
                  className='single-place' 
                  onClick={() => {
                    setOpenImageView(true)
                    setImage(place.img)
                  }}
                  >
                  <img src={place.img} alt={`${place.text} Image`} />
                  <div className="details">
                    <h3>{place.text}</h3>
                    <p>{place.properties}</p>
                  </div>
                </div>
              ))}
            </>
          }
          {error && <p className='error-message'>Something Wrong!</p>}
      </div>
      {openImageViewer && <ImageViewer img={image} onClose={setOpenImageView} />}
    </>
  )
}

export default Popular