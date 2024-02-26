import React from 'react'
import bg from '../Media/m.png'
import { Button, Container, Typography,useMediaQuery } from '@mui/material'
import im from '../Media/IDAsticker-Large-300x192.png'

export default function Mission() {
  const matches = useMediaQuery('(min-width:1000px)');

  return (
    <div style={{backgroundImage: matches?`url(${bg})`:'' 
    ,backgroundSize:'100% 600px',backgroundPosition:'center',
    position:'relative',height:'550px',backgroundColor:'black',marginTop:'60px',
    backgroundRepeat:'no-repeat'}}>
      <Container >
      <Typography sx={{position:'absolute',top:matches?'20%':'10%',right:matches?'37.1%':'31%',color:'white',fontSize:'25px'}}>
      OUR MISSION
      </Typography>
      <Typography sx={{color:'white',fontSize:'15px', position:'absolute',top:matches?'35%':'20%',
      right:matches?'10vw':''}}>
      <Container maxWidth='sm' sx={{display:'flex',flexWrap:'wrap',justifyContent:matches?'start':'center',alignItems:'start'}}>
  At Dynamic Gloss Auto Detailng, our mission is to provide the best prices and best auto detailing services in Cleveland, OH.
We use only the highest quality products and equipment to ensure your vehicle looks its best.
</Container>
      </Typography>
      <Button sx={{position:'absolute',top:matches?'60%':'60%',right:matches?'35%':'30%',color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,padding:'5px',width:'190px'}}>VIEW OUR WORK</Button>
</Container>
            <img src={im} style={{position:'absolute',top:matches?'72%':'80%',right:matches?'10rem':'32%',height:'100px'}} />
    </div>
  )
}
