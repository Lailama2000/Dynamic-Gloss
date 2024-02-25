import { Box, Container, Stack, Typography, useMediaQuery , Button} from '@mui/material'
import React, { useEffect } from 'react'
import pic from '../Media/Rectangle 122.png'
import PriceListForm from '../Component/PriceListForm'

export default function PriceList() {
    const matches = useMediaQuery('(min-width:650px)')
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  return (
    <div style={{backgroundColor:'#141414'}}>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:'100px'}}>
      <Typography sx={{color:'white',fontSize:'30px'}}>
      PRICE LIST
      </Typography>
      </Box>


        <Stack gap={10}>
        <Container maxWidth='md' >
      <Stack direction={matches?'row':'column'} gap={matches?10:2} >
        <img src={pic} style={{height:'280px'}}/>
        <Stack>
        <Typography sx={{color:'white',fontSize:'25px'}}>
        Paint correction stage 1
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'20px'}}>
        Stage 1 paint correction with a polishing pad remove about 50% of paint issues including swirl marks, water marks and bug guts followed by 3 months sealant to protect your paint ( better than wax ) 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',fontWeight:'bold'}}>
        200$
        </Typography>
        <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,paddingLeft:'20px',pr:'20px',mt:'20px',width:'150px'}}>
        START NOW
        </Button>
        </Stack>
      </Stack>
      </Container>

      <Container maxWidth='md' >
      <Stack direction={matches?'row':'column'} gap={matches?10:2} >
        <img src={pic} style={{height:'280px'}}/>
        <Stack>
        <Typography sx={{color:'white',fontSize:'25px'}}>
        Paint correction stage 1
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'20px'}}>
        Stage 1 paint correction with a polishing pad remove about 50% of paint issues including swirl marks, water marks and bug guts followed by 3 months sealant to protect your paint ( better than wax ) 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',fontWeight:'bold'}}>
        200$
        </Typography>
        <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,paddingLeft:'20px',pr:'20px',mt:'20px',width:'150px'}}>
        START NOW
        </Button>
        </Stack>
      </Stack>
      </Container>

      <Container maxWidth='md' >
      <Stack direction={matches?'row':'column'} gap={matches?10:2} >
        <img src={pic} style={{height:'280px'}}/>
        <Stack>
        <Typography sx={{color:'white',fontSize:'25px'}}>
        Paint correction stage 1
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'20px'}}>
        Stage 1 paint correction with a polishing pad remove about 50% of paint issues including swirl marks, water marks and bug guts followed by 3 months sealant to protect your paint ( better than wax ) 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',fontWeight:'bold'}}>
        200$
        </Typography>
        <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,paddingLeft:'20px',pr:'20px',mt:'20px',width:'150px'}}>
        START NOW
        </Button>
        </Stack>
      </Stack>
      </Container>

      <Container maxWidth='md' sx={{mb:'70px'}} >
      <Stack direction={matches?'row':'column'} gap={matches?10:2} >
        <img src={pic} style={{height:'280px'}}/>
        <Stack>
        <Typography sx={{color:'white',fontSize:'25px'}}>
        Paint correction stage 1
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'20px'}}>
        Stage 1 paint correction with a polishing pad remove about 50% of paint issues including swirl marks, water marks and bug guts followed by 3 months sealant to protect your paint ( better than wax ) 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',fontWeight:'bold'}}>
        200$
        </Typography>
        <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,paddingLeft:'20px',pr:'20px',mt:'20px',width:'150px'}}>
        START NOW
        </Button>
        </Stack>
      </Stack>
      </Container>
      </Stack>

      <PriceListForm />
    </div>
  )
}
