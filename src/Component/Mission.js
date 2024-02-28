import React from 'react'
import bg from '../Media/m.png'
import { Button, Container, Stack, Typography,useMediaQuery } from '@mui/material'
import im from '../Media/IDAsticker-Large-300x192.png'

export default function Mission() {
  const matches = useMediaQuery('(min-width:1000px)');

  return (
    <div style={{ minHeight:'450px',backgroundColor:'black'}}>
      <Stack direction={matches?'row':'column'} gap={10}>
        {matches&& <img src={bg} style={{height:'550px',width:'500px',objectFit:'cover'}}/>}


<Container maxWidth='sm' sx={{position:'relative',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
  <Stack gap={2}>
      <Typography sx={{color:'white',fontSize:'30px'}} className='custom'>
      OUR MISSION
      </Typography>
      <Typography sx={{color:'white',fontSize:'15px'}}>
  At Dynamic Gloss Auto Detailng, our mission is to provide the best prices and best auto detailing services in Cleveland, OH.
We use only the highest quality products and equipment to ensure your vehicle looks its best.
      </Typography>
      <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
  ,padding:'5px',width:'190px'}}>VIEW OUR WORK</Button>

            <img src={im} style={{position:'absolute',top:matches?'80%':'300px',right:matches?'8%':' ',height:'100px'}} />
            </Stack>
            </Container>
            </Stack>

    </div>
  )
}
