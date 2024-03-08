import { Box, useMediaQuery, Stack, Typography, Container } from '@mui/material'
import React, { useEffect } from 'react'
import bg from '../Media/reviews.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import pic from '../Media/Ellipse 4.png'
import Rating from '@mui/material/Rating';
import 'swiper/css/pagination';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Reviews({reviews}) {
    const matches = useMediaQuery('(min-width:740px)');
  return (
    <div style={{backgroundImage: `url(${bg})` ,backgroundSize:'cover',backgroundPosition:'center'
    ,marginTop:'60px'}}>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:matches?'60px':'0px 0px 100px 0px'}}>
        <Typography sx={{color:'white',fontSize:'25px',fontFamily:'Racing Sans One, sans-serif',mt:matches?'':'50px'}}>WHAT OUR </Typography>
<Typography sx={{color:'white',fontSize:'25px',fontFamily:'Racing Sans One, sans-serif'}}>CUSTOMERS SAY</Typography>
</Stack>


<Container maxWidth='lg'>
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
  spaceBetween={20}
  style={{ paddingBottom:'100px' }}
  className="custom-swiper"
>
  {reviews.map((r)=>
                <SwiperSlide style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',position:'relative'}}>
      <div class="card-container">
	<img src={r.profile_photo_url} alt="user" style={{borderRadius:'100%',width:'120px',height:'120px'}}
  referrerpolicy="no-referrer" /><br/>
    <Rating name="read-only" value={r.rating} readOnly sx={{marginTop:'30px'}} />
    <Container maxWidth='xs'>
	<p>{r.text} </p>
  </Container>
  <Container sx={{position:'absolute',bottom:'10px',left:'0px',fontWeight:'bold'}}>
	<p > {r.author_name}</p></Container>
</div>
</SwiperSlide>)}
</Swiper>


      </Container>
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
