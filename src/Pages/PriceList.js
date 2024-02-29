import { Box, Container, Stack, Typography, useMediaQuery , Button, Divider} from '@mui/material'
import React, { useEffect , useState} from 'react'
import pic from '../Media/Rectangle 122.png'
import PriceListForm from '../Component/PriceListForm'

export default function PriceList() {
    const matches = useMediaQuery('(min-width:650px)')
    useEffect(()=>{
      window.scrollTo(0,0)
  },[])
  const [active,setActive] = useState(true)

  return (
    <div style={{backgroundColor:'#141414'}}>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:'130px',paddingBottom:'30px'}}>
      <Typography sx={{color:'white',fontSize:'30px',marginTop:'20px',fontFamily:'Racing Sans One, sans-serif'}}>
      PRICE LIST
      </Typography>
      </Box>

      <Stack
      direction={matches ? 'row' : 'column'}
      gap={matches ? 1 : 3}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        mb: '70px',
      }}
    >
      <Button
        sx={{
          width: matches ? '400px' : '100px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: active ? '#C71B1B' :'white',
          alignItems: 'center',
          fontWeight: 'bold',
          padding: '15px',
          '&:focus': { color: '#C71B1B', backgroundColor: 'transparent' },
        }}
        onClick={() => {
          setActive(true);
        }}
      >
        PAINT CORRECTION
      </Button>
      {matches && (
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          color="white"
        />
      )}
      <Button
        sx={{
          width: matches ? '400px' : '100px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          color: 'white',
          alignItems: 'center',
          fontWeight: 'bold',
          padding: '15px',
          '&:focus': { color: '#C71B1B', backgroundColor: 'transparent' },
        }}
        onClick={() => {
          setActive(false);
        }}
      >
        INTERIOR DETAILING
      </Button>
    </Stack>



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
        <Typography sx={{color:'white',fontSize:'12px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold'}}>
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
        <Typography sx={{color:'white',fontSize:'12px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold'}}>
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
        <Typography sx={{color:'white',fontSize:'12px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold'}}>
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
        <Typography sx={{color:'white',fontSize:'12px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold'}}>
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
