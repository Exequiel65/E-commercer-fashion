import React from 'react';
import { useState } from 'react';
import '../../styles/CarouselProductDetail.css'

const CarouselProductDetail = ({images}) => {
  console.log(images)
  const [imgIndex, setimgIndex] = useState(0);
  const [ImgUrl, setImgUrl] = useState([images]);
  let next = () => {
    if ((imgIndex + 1) === ImgUrl.length) {
      return setimgIndex(0)
    }

    setimgIndex(imgIndex + 1)
  }

  let previous = () => {
    if (imgIndex === 0) {
      return setimgIndex(ImgUrl.length - 1)
    }

    setimgIndex(imgIndex - 1)
  }

  return (
    <div className='carousel-container'>
      <div className='flex-row slider-container'>
        <div className='button-slide'>
          <p onClick={previous}><i className="fas fa-chevron-left"></i></p>
        </div>
        <div className='img-contain-slide'>
          <img src={ImgUrl[imgIndex]} alt="" />
        </div>
        <div className='button-slide'>
          <p onClick={next}>
          <i className="fas fa-chevron-right"></i>
          </p>
        </div>
      </div>

      <div className='flex-row  list-images'>
        { ImgUrl.map((img, i)=>(
           <img src={img} key={img} onClick={()=> setimgIndex(i)} alt="" />
        ))}
      </div>
    </div>
  );
}

export default CarouselProductDetail;
