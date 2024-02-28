import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import im from '../Media/imgggg.png';
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export default function Slider() {
  const swiperStyles = `
  @media (max-width: 500px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #C71B1B;
  }
`;
  let sectionElement='form';
  useEffect(()=>{    
     sectionElement = document.getElementById('form');      
},[])
  const handleClick = () => {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
};
const matches = useMediaQuery('(min-width:500px)');

  return (
    <div style={{ minHeight: '500px', position: 'relative',backgroundColor:'black',marginTop:matches?'90px':'50px' }}>
      <style>{swiperStyles}</style>
      <Swiper modules={[Autoplay,Navigation]} 
       autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      slidesPerView={1} 
      navigation
      style={{ width: '100%' }}>
        <SwiperSlide style={{ width: '100%',backgroundImage: `url(${im})`, minHeight: '500px'
       ,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center', width: '100%',
       display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          <div className='overlay'></div>
          <Container maxWidth='lg' sx={{ display:'flex',ml:matches?'40px':'',flexDirection:'column',marginTop:matches?'15%':'60%',justifyContent:'start',alignItems:'start',zIndex:10}}>
          <Typography sx={{ color: 'white', fontSize: matches?'30px':'20px' }}>
          Check out our unbeatable prices and offers!
          </Typography>
          <Button
            sx={{
              color: 'white',
              bgcolor: '#C71B1B',
              '&:hover': { color: 'white', bgcolor: '#C71B1B' },
              padding: '5px',
              width: '150px',
              position: 'relative',
              marginTop: '20px'
            }} onClick={handleClick}
          >
            START NOW
          </Button>
          </Container>
        </SwiperSlide>


        <SwiperSlide style={{ width: '100%',backgroundImage: `url(${im})`, minHeight: '500px'
       ,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center', width: '100%',
       display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          <div className='overlay'></div>
          <Container maxWidth='lg' sx={{ display:'flex',ml:matches?'40px':'',flexDirection:'column',marginTop:matches?'15%':'60%',justifyContent:'start',alignItems:'start',zIndex:10}}>
          <Typography sx={{ color: 'white', fontSize: matches?'30px':'20px' }}>
          Check out our unbeatable prices and offers!
          </Typography>
          <Button
            sx={{
              color: 'white',
              bgcolor: '#C71B1B',
              '&:hover': { color: 'white', bgcolor: '#C71B1B' },
              padding: '5px',
              width: '150px',
              position: 'relative',
              marginTop: '20px'
            }} onClick={handleClick}
          >
            START NOW
          </Button>
          </Container>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}