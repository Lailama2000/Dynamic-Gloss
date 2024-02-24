import React from 'react'
import bg from '../Media/m.png'
import { Button, Container, Typography } from '@mui/material'
import im from '../Media/IDAsticker-Large-300x192.png'

export default function Mission() {
  return (
    <div style={{backgroundImage: `url(${bg})` ,backgroundSize:'cover',backgroundPosition:'center',
    position:'relative',height:'450px',backgroundColor:'black',marginTop:'30px'}}>
      <Typography sx={{position:'absolute',top:'20%',right:'37.5%',color:'white',fontSize:'25px'}}>
      OUR MISSION
      </Typography>
      <Typography sx={{position:'absolute',top:'35%',right:'10rem',color:'white',fontSize:'15px'}}>
        <Container maxWidth='sm'>
        At Dynamic Gloss Auto Detailng, our mission is to provide the best prices and best auto detailing services in Cleveland, OH.

We use only the highest quality products and equipment to ensure your vehicle looks its best.
      </Container>
      </Typography>
      <Button sx={{position:'absolute',top:'60%',right:'36%',color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,padding:'5px',width:'190px'}}>VIEW OUR WORK</Button>

            <img src={im} style={{position:'absolute',top:'70%',right:'10%',height:'80px'}} />
    </div>
  )
}
