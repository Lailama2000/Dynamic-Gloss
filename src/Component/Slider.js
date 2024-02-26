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
    <div style={{ minHeight: '500px', position: 'relative',backgroundColor:'black',marginTop:'50px' }}>
      <style>{swiperStyles}</style>
      <Swiper modules={[Autoplay,Navigation]} 
       autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1} 
      navigation
      style={{ width: '100%' }}>
        <SwiperSlide style={{ width: '100%',backgroundImage: `url(${im})`, minHeight: '500px'
       ,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center', width: '100%' }}>
          {/* <img style={{ height: '500px', width: '100%', objectFit: 'cover' }} src={im} /> */}
          <div className='overlay'></div>
          <Typography sx={{ color: 'white', position:'relative', marginTop: matches?'25%':'80%',
           marginRight: matches?'53%':'', fontSize: '25px' }}>
            <Container maxWidth='xs'>Check out our unbeatable prices and offers!
           </Container>
          </Typography>
          <Button
            sx={{
              color: 'white',
              bgcolor: '#C71B1B',
              '&:hover': { color: 'white', bgcolor: '#C71B1B' },
              padding: '5px',
              width: '190px',
              position: 'relative',
              marginTop: '2%',
              marginLeft: matches?'16vh':'2vh',
            }} onClick={handleClick}
          >
            START NOW
          </Button>
        </SwiperSlide>
        <SwiperSlide style={{ width: '100%',backgroundImage: `url(${im})`, minHeight: '500px'
       ,backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundPosition:'center', width: '100%' }}>
          {/* <img style={{ height: '500px', width: '100%', objectFit: 'cover' }} src={im} /> */}
          <div className='overlay'></div>
          <Typography sx={{ color: 'white', position:'relative', marginTop: matches?'25%':'80%',
           marginRight: matches?'53%':'', fontSize: '25px' }}>
            <Container maxWidth='xs'>Check out our unbeatable prices and offers!
           </Container>
          </Typography>
          <Button
            sx={{
              color: 'white',
              bgcolor: '#C71B1B',
              '&:hover': { color: 'white', bgcolor: '#C71B1B' },
              padding: '5px',
              width: '190px',
              position: 'relative',
              marginTop: '2%',
              marginLeft: matches?'16vh':'2vh',
            }} onClick={handleClick}
          >
            START NOW
          </Button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}