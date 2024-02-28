import React, { useEffect } from 'react'
import Slider from '../Component/Slider'
import { Stack,useMediaQuery } from '@mui/material';
import WhatsAppimage from '../Media/Group.png'
import insta from '../Media/insta.png'
import Services from '../Component/Services';
import Mission from '../Component/Mission';
import Reviews from '../Component/Reviews';
import Form from '../Component/Form';

export default function MainPage() {
    const matches = useMediaQuery('(min-width:800px)');
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  return (
    <div style={{backgroundColor:'black'}}>
        <Stack direction='column'>
        <img style={{position:'fixed',zIndex:10,objectFit:'contain',
    top:'80%',right:matches?'10px':'10px',width:matches?'70px':'45px',height:matches?'55px':'45px',
    cursor:'pointer'}} src={insta}/>
        <img style={{position:'fixed',zIndex:10,objectFit:'contain',
    top:matches?'90%':'87%',right:matches?'10px':'12px',width:matches?'70px':'40px',height:matches?'35px':'30px',cursor:'pointer'}} src={WhatsAppimage}/>
    </Stack>
      <Slider />
      <Services />
      <Mission />
      <Reviews />
      <Form />
    </div>
  )
}
