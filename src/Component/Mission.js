import React from 'react'
import bg from '../Media/m.png'
import { Button, Container, Typography,useMediaQuery } from '@mui/material'
import im from '../Media/IDAsticker-Large-300x192.png'

export default function Mission() {
  const matches = useMediaQuery('(min-width:1000px)');

  return (
    <div style={{backgroundImage: matches?`url(${bg})`:'' ,backgroundSize:'cover',backgroundPosition:'center',
    position:'relative',height:'450px',backgroundColor:'black',marginTop:'60px'}}>
      <Container sx={{textAlign:'start'}}>
      <Typography sx={{position:'absolute',top:'20%',right:matches?'37.1%':'31%',color:'white',fontSize:'25px'}}>
      OUR MISSION
      </Typography>
      <Typography sx={{position:'absolute',top:'35%',right:matches?'10rem':'',color:'white',fontSize:'15px'}}>
        <Container maxWidth='sm'>
        At Dynamic Gloss Auto Detailng, our mission is to provide the best prices and best auto detailing services in Cleveland, OH.

We use only the highest quality products and equipment to ensure your vehicle looks its best.
      </Container>
      </Typography>
      <Button sx={{position:'absolute',top:matches?'60%':'75%',right:matches?'36%':'30%',color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,padding:'5px',width:'190px'}}>VIEW OUR WORK</Button>
</Container>
            <img src={im} style={{position:'absolute',top:matches?'80%':'95%',right:'14%',height:'80px'}} />
    </div>
  )
}
