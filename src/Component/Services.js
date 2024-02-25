import { Box, Container, Typography,useMediaQuery } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic from '../Media/Component 4 – 2.png'
import { Autoplay,Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';

export default function Services() {
    const [swiper, setSwiper] = React.useState(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const matches = useMediaQuery('(min-width:1000px)');

  const handleSlideChange = () => {
    if (swiper) {
        
      setActiveIndex(swiper.realIndex);
    }
  };
  return (
    <div style={{backgroundColor:'#141414'}}>
        <Box>
        <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start'}}>
      <Typography sx={{color:'white',fontSize:'25px',marginTop:'80px',paddingLeft:'30px',marginBottom:'30px'}}>
      OUR SERVICES
      </Typography>
      </Container>
      </Box>

      <Container maxWidth='lg'>
      <Swiper
      modules={[Autoplay,Scrollbar]} 
      autoplay={{
       delay: 5000,
       disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        slidesPerView={matches?4:1}
        spaceBetween={50}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        style={{ padding: '20px' }}
        className="custom-swiper"
      >
        <SwiperSlide>
        <div class="wrapper">
  <div class="card">
    <img
    src={pic} alt='loading' />
    <div class="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>RESTORE YOUR CAR NOW</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
  <div class="card">
    <img src={pic} alt='loading' />
    <div class="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>RESTORE YOUR CAR NOW</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
  <div class="card">
    <img src={pic} alt='loading' />
    <div class="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>RESTORE YOUR CAR NOW</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
  <div class="card">
    <img src={pic} alt='loading' />
    <div class="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>RESTORE YOUR CAR NOW</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
  <div class="card">
    <img src={pic} alt='loading' />
    <div class="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>RESTORE YOUR CAR NOW</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
  <div class="card">
    <img src={pic} alt='loading' />
    <div class="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>RESTORE YOUR CAR NOW</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="wrapper">
  <div class="card">
    <img src={pic} alt='loading' />
    <div class="info">
      <h1>Mountain</h1>
      <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      <button>RESTORE YOUR CAR NOW</button>
    </div>
  </div>
</div>
        </SwiperSlide>
      </Swiper>
      </Container>
      {/* <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      <div className="progress-bar">
      <div className="progress" style={{ width: `${((activeIndex + 1) / Math.ceil(10 / 4)) * 100}%` }}></div>
        </div>
        </Container> */}
    </div>
  )
}
