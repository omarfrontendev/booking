import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageViewer from '../../UI/imageViewer/ImageViewer';

const Slider = ({ features }) => {

  const [openImageViewer, setOpenImageViewer] = useState(false);
  const [image, setImage] = useState('');

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          390: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          }
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider"
        >
        {features.map(feature => (
          <SwiperSlide key={feature.id}>
            <div className="single-feature" onClick={() => {
              setOpenImageViewer(true)
              setImage(feature.img)
            }}>
              <img src={feature.img} alt={feature.text + 'Image'} />
              <div className="details flex column">
                <h4>{feature.text}</h4>
                <span>{feature.num} {feature.text}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {openImageViewer && <ImageViewer img={image} onClose={setOpenImageViewer} />}
    </>
  )
}

export default Slider