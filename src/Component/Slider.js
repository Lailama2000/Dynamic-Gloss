import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import im from '../Media/pexels-pavel-danilyuk-6161372 (1080p).png';
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export default function Slider() {
  const swiperStyles = `
    .swiper-button-next,
    .swiper-button-prev {
      color: #C71B1B;
    }
  `;

  return (
    <div style={{ minHeight: '500px', position: 'relative',backgroundColor:'black' }}>
      <style>{swiperStyles}</style>
      <Swiper modules={[Autoplay,Navigation]} 
       autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1} 
      navigation 
      style={{ width: '100%' }}>
        <SwiperSlide style={{ width: '100%' }}>
          <img style={{ height: '500px', width: '100%', objectFit: 'cover' }} src={im} />
          <div className='overlay'></div>
          <Typography sx={{ color: 'white', position: 'absolute', top: '47%', left: '10vh', fontSize: '25px' }}>
            <Container maxWidth='xs'>Check out our unbeatable prices and offers!</Container>
          </Typography>
          <Button
            sx={{
              color: 'white',
              bgcolor: '#C71B1B',
              '&:hover': { color: 'white', bgcolor: '#C71B1B' },
              padding: '5px',
              width: '190px',
              position: 'absolute',
              top: '70%',
              left: '14vh',
            }}
          >
            START NOW
          </Button>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ height: '500px', width: '100%', objectFit: 'cover' }} src={im} />
          <div className='overlay'></div>
          <Typography sx={{ color: 'white', position: 'absolute', top: '47%', left: '10vh', fontSize: '25px' }}>
            <Container maxWidth='xs'>Check out our unbeatable prices and offers!</Container>
          </Typography>
          <Button
            sx={{
              color: 'white',
              bgcolor: '#C71B1B',
              '&:hover': { color: 'white', bgcolor: '#C71B1B' },
              padding: '5px',
              width: '190px',
              position: 'absolute',
              top: '70%',
              left: '14vh',
            }}
          >
            START NOW
          </Button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}