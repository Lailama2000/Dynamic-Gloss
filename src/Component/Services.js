import { Box, Container, Typography,useMediaQuery } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import pic from '../Media/Component.png'
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import '../App.css'

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
    <div style={{backgroundColor:'#141414',marginBottom:'30px',position:'relative'}}>
        <Box>
        <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start'}}>
      <Typography sx={{color:'white',fontSize:'25px',marginTop:'80px',marginBottom:'30px',fontFamily:'Racing Sans One, sans-serif'}}>
      OUR SERVICES
      </Typography>
      </Container>
      </Box>
<Container maxWidth='lg'>
      <Swiper
      modules={[Autoplay,Pagination,Navigation]} 
      autoplay={{
       delay: 5000,
       disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.custom-swiper-prev',
          nextEl: '.custom-swiper-next',
        }}
        pagination={{ clickable: true }}
        slidesPerView={matches?4:1}
        spaceBetween={50}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        style={{paddingBottom:'50px' }}
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
