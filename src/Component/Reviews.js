import { Box, useMediaQuery, Stack, Typography } from '@mui/material'
import React from 'react'
import bg from '../Media/reviews.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import pic from '../Media/Ellipse 4.png'
import Rating from '@mui/material/Rating';
import 'swiper/css/pagination';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Reviews() {
    const matches = useMediaQuery('(min-width:740px)');

  return (
    <div style={{backgroundImage: `url(${bg})` ,backgroundSize:'cover',backgroundPosition:'center'
    ,marginTop:'60px',padding:'50px',position:'relative'}}>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:matches?'60px':'0px 0px 100px 0px'}}>
        <Typography sx={{color:'white',fontSize:'25px',}}>WHAT OUR </Typography>
<Typography sx={{color:'white',fontSize:'25px',}}>CUSTOMERS SAY</Typography>
</Stack>
<Swiper
loop={true}
  modules={[Autoplay, Navigation, Pagination]}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  centeredSlides={true}
  navigation={{
    prevEl: '.custom-swiper-prev',
    nextEl: '.custom-swiper-next',
  }}
  pagination={{ clickable: true }}
  slidesPerView={matches?3:1}
  spaceBetween={50}
  style={{ padding: matches?'0px 0px 100px 20px':'0px 0px 100px 0px' }}
  className="custom-swiper"
>
                <SwiperSlide>
      <div class="card-container">
	<img  src={pic} alt="user" style={{borderRadius:'100%'}}/><br/>
    <Rating name="read-only" value={5} readOnly sx={{marginTop:'30px'}} />
	<p>“Moe’s attention to detail is
    unmatched. <br/> In the finished” </p>
	<p style={{marginTop:'30px'}}>Jesika Lynn - 2/5/2024</p>
</div>
</SwiperSlide>

<SwiperSlide>
      <div class="card-container">
	<img  src={pic} alt="user" style={{borderRadius:'100%'}}/><br/>
    <Rating name="read-only" value={5} readOnly sx={{marginTop:'30px'}} />
	<p>“Moe’s attention to detail is
    unmatched. <br/> In the finished” </p>
	<p style={{marginTop:'30px'}}>Jesika Lynn - 2/5/2024</p>
</div>
</SwiperSlide>
<SwiperSlide>
      <div class="card-container">
	<img  src={pic} alt="user" style={{borderRadius:'100%'}}/><br/>
    <Rating name="read-only" value={5} readOnly sx={{marginTop:'30px'}} />
	<p>“Moe’s attention to detail is
    unmatched. <br/> In the finished” </p>
	<p style={{marginTop:'30px'}}>Jesika Lynn - 2/5/2024</p>
</div>
</SwiperSlide>
         <SwiperSlide>
      <div class="card-container">
	<img  src={pic} alt="user" style={{borderRadius:'100%'}}/><br/>
    <Rating name="read-only" value={5} readOnly sx={{marginTop:'30px'}} />
	<p>“Moe’s attention to detail is
    unmatched. <br/> In the finished” </p>
	<p style={{marginTop:'30px'}}>Jesika Lynn - 2/5/2024</p>
</div>
</SwiperSlide>
</Swiper>

{matches && <><div className="custom-swiper-prev">
        <ArrowLeftIcon
          style={{
            color: 'white',
            fontSize: '70px',
            position: 'absolute',
            top: '50%',
            left: '10px',
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
            top: '50%',
            right: '10px',
            zIndex: '1',
            cursor: 'pointer',
          }}
        />
      </div></>}
    </div>
  )
}
