import React from 'react'
import Slider from './Slider'
import FetchData from '../../hooks/use-api';
import Spinner from '../../UI/spinner/Spinner';
import Popular from './Popular';

import './featured.css'
import GuestsLove from './GuestsLove';

const Featured = () => {

  const {
    data: features,
    isLoading,
    error
  } = FetchData('features');

  const {
    data: popular,
    isLoading: popularLoading,
    error: popularError
  } = FetchData('popular');

  return (
    <section className='featured'>
      <h2 className="section-title">Browse by property type</h2>
      {isLoading && !error ?
      <div className='lazyFeatures flex'>
        <div className="lazyFeature flex">
          <Spinner /> 
        </div>
        <div className="lazyFeature flex">
          <Spinner /> 
        </div>
      </div>
        : 
      <Slider features={features} />}
      {error && <p className='error-message'>Something Wrong!</p>}
      <Popular places={popular} error={popularError} loading={popularLoading} />
      <h2 className="section-title">Home guests love</h2>
      <GuestsLove />
    </section>
  )
}

export default Featured