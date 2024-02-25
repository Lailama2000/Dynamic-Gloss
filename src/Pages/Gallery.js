import { Box , Container, Typography, useMediaQuery} from '@mui/material'
import React, { useEffect } from 'react'
import im1 from '../Media/im1.png'
import im2 from '../Media/im2.png'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Form from '../Component/Form';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import pic from '../Media/Rectangle 122.png'

export default function Gallery() {
    const matches = useMediaQuery('(min-width:948px)');
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <div style={{backgroundColor:'#141414',position:'relative'}}>
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:'100px'}}>
      <Typography sx={{color:'white',fontSize:'30px'}}>
      GALLERY
      </Typography>
      </Box>

      <Swiper
    loop={true}
    allowTouchMove={matches?false:true}
  modules={[ Navigation]}
  centeredSlides={true}
  navigation={{
    prevEl: '.custom-swiper-prev',
    nextEl: '.custom-swiper-next',
  }}
  slidesPerView={1}
  spaceBetween={50}
>
    <SwiperSlide>
      <Container maxWidth='md' sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <ReactCompareSlider style={{height:'450px',width:'90%'}}
      itemOne={<ReactCompareSliderImage src={im1} alt="Image one" style={{objectFit:'fill'}}/>}
      itemTwo={<ReactCompareSliderImage src={im2} alt="Image two" style={{objectFit:'fill'}} />}
    />
      </Container>
      </SwiperSlide>

      <SwiperSlide>
      <Container maxWidth='md' sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <ReactCompareSlider style={{height:'450px',width:'90%'}}
      itemOne={<ReactCompareSliderImage src={pic} alt="Image one" style={{objectFit:'fill'}}/>}
      itemTwo={<ReactCompareSliderImage src={pic} alt="Image two" style={{objectFit:'fill'}} />}
    />
      </Container>
      </SwiperSlide>
      </Swiper>

      {matches && <><div className="custom-swiper-prev">
        <ArrowLeftIcon
          style={{
            color: 'white',
            fontSize: '70px',
            position: 'absolute',
            top: '35%',
            left: '40px',
            zIndex: '1',
            cursor: 'pointer',
          }}
        />
      </div>
      <div className="custom-swiper-next">
        <ArrowRightIcon
          style={{
            color: 'white',
            fontSize: '70px',
            position: 'absolute',
            top: '35%',
            right: '40px',
            zIndex: '1',
            cursor: 'pointer',
          }}
        />
      </div></>}

      <Form />
    </div>
  )
}
