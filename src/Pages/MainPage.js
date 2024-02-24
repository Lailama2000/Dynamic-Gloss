import React from 'react'
import Slider from '../Component/Slider'
import { Stack,useMediaQuery } from '@mui/material';
import WhatsAppimage from '../Media/Group.png'
import insta from '../Media/insta.png'
import Services from '../Component/Services';
import Mission from '../Component/Mission';

export default function MainPage() {
    const matches = useMediaQuery('(min-width:800px)');
  return (
    <div style={{backgroundColor:'black'}}>
        <Stack direction='column'>
        <img style={{position:'fixed',zIndex:10,objectFit:'contain',
    top:'85%',right:matches?'30px':'50px',width:matches?'40px':'30px',height:matches?'40px':'30px',cursor:'pointer'}} src={insta}/>
        <img style={{position:'fixed',zIndex:10,objectFit:'contain',
    top:'93%',right:matches?'35px':'50px',width:matches?'30px':'30px',height:matches?'25px':'20px',cursor:'pointer'}} src={WhatsAppimage}/>
    </Stack>
      <Slider />
      <Services />
      <Mission />
    </div>
  )
}
