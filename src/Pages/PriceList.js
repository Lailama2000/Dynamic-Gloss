import { Box, Container, Stack, Typography, useMediaQuery , Button, Divider, Link} from '@mui/material'
import React, { useEffect , useState} from 'react'
import pic from '../Media/Rectangle 122.png'
import PriceListForm from '../Component/PriceListForm'
import axios from 'axios';
import LoadingPage from '../Component/LoadingPage';
import Form from '../Component/Form';

export default function PriceList() {
  const [open, setOpen] = useState(true);
  const [paint,setPaint] = useState([])
  const [Interior_detailing,setInterior_detailing] = useState([])
  const [contact,setContact] = useState({})

    const matches = useMediaQuery('(min-width:650px)')
    useEffect(()=>{
      window.scrollTo(0,0)
      axios.get(`${process.env.REACT_APP_API_URL}price-list`).then(res=>{
        setPaint(res.data.paint_correction)
        setInterior_detailing(res.data.Interior_detailing)
        setOpen(false)
      })
      axios.get(`${process.env.REACT_APP_API_URL}home`).then(res=>{
        setContact(res.data.data.general)
      })
  },[])
  const [active,setActive] = useState(true)

  return (
    <div style={{backgroundColor:'#141414'}}>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',paddingTop:'130px',paddingBottom:'30px'}}>
      <Typography sx={{color:'white',fontSize:'30px',marginTop:'20px',fontFamily:'Racing Sans One, sans-serif'}}>
      PRICE LIST
      </Typography>
      </Box>
      {open && <LoadingPage open={open} />}
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


{!open && active &&<>
        <Stack gap={10}>
        {paint.map((paint)=> <>
        <Container maxWidth='md' >
      <Stack direction={matches?'row':'column'} gap={matches?10:2} >
        <img src={paint.image} style={{height:'280px',width:'300px'}}/>
        <Stack>
        <Typography sx={{color:'white',fontSize:'25px'}}>
        {paint.title}
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'20px'}}>
          {paint.description}
        </Typography>
        <Typography sx={{color:'white',fontSize:'12px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold'}}>
        {paint.price}$
        </Typography>
        <Link href={`tel:${contact.phone_number}`} style={{textDecoration: 'none'}}>
        <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,paddingLeft:'20px',pr:'20px',mt:'20px',width:'150px'}}>
        START NOW
        </Button>
        </Link>
        </Stack>
      </Stack>
      </Container></>)}
      </Stack>
    </>}



    {!open && !active && <Stack gap={10}>
    {Interior_detailing.map((Interior_detailing)=> <>
        <Container maxWidth='md'>
      <Stack direction={matches?'row':'column'} gap={matches?10:2}>
        <img src={Interior_detailing.image} style={{height:'280px',width:'300px',objectFit:'cover'}}/>
        <Stack>
        <Typography sx={{color:'white',fontSize:'25px'}}>
        {Interior_detailing.title}
        </Typography>
        <Typography sx={{color:'white',fontSize:'15px',mt:'20px'}}>
          {Interior_detailing.description}
        </Typography>
        <Typography sx={{color:'white',fontSize:'12px',mt:'50px'}}>
        Starting from 
        </Typography>
        <Typography sx={{color:'white',fontSize:'20px',fontWeight:'bold'}}>
        {Interior_detailing.price}$
        </Typography>
        <Link href={`tel:${contact.phone_number}`} style={{textDecoration: 'none'}}>
        <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,paddingLeft:'20px',pr:'20px',mt:'20px',width:'150px'}}>
        START NOW
        </Button>
        </Link>
        </Stack>
      </Stack>
      </Container></>)}
      </Stack>}
      <Form />
    </div>
  )
}
