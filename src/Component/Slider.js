import { Button, Container, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect,useRef } from 'react';
import im from '../Media/imgggg.png';
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

export default function Slider({sliders}) {
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
     sectionElement = document.getElementById(sectionElement);      
},[])
  const handleClick = () => {
    sectionElement.scrollIntoView({ behavior: 'smooth' });
};
const matches = useMediaQuery('(min-width:500px)');
const windowHeight = useRef(window.innerHeight);

function isImage(url) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg']; 

  const extension = url.substring(url.lastIndexOf('.')).toLowerCase();
  return imageExtensions.includes(extension);
}
  return (
    <div style={{  height: matches?'640px':'500px', position: 'relative',backgroundColor:'black',marginTop:matches?'90px':'50px' }}>
      <style>{swiperStyles}</style>
      <Swiper modules={[Autoplay,Navigation]} 
       autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      slidesPerView={1} 
      navigation
      style={{ width: '100%' }}>
        {sliders.map((s)=><>
          <SwiperSlide style={{ width: '100%', height: matches ? '640px' : '500px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
  {isImage(s.attachment) ? (
    <div style={{ backgroundImage: `url(${s.attachment})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100%' }}></div>
  ) : (
    <div style={{ width: '100%', height: '100%' }}>
      <video src={s.attachment} style={{ width: '100%', height: '100%' }} autoPlay loop muted></video>
    </div>
  )}
  <div className='overlay'></div>
  <Container maxWidth='lg' sx={{ position: 'absolute', left: 0, right: 0, top: matches?'55%':'60%', zIndex: 10 }}>
    <Typography sx={{ color: 'white', fontSize: matches ? '30px' : '20px' }}>
      {s.title}     
    </Typography>
    <Button
      sx={{
        color: 'white',
        bgcolor: '#C71B1B',
        '&:hover': { color: 'white', bgcolor: '#C71B1B' },
        padding: '5px',
        width: '150px',
        position: 'relative',
        marginTop: '20px',
        zIndex: 10
      }}
      onClick={handleClick}
    >
      START NOW
    </Button>
  </Container>
</SwiperSlide>
        </>)}
      </Swiper>
    </div>
  );
}