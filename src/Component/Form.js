import { Typography, TextField, Grid, Stack, TextareaAutosize, useMediaQuery, Button, Alert, Container } from '@mui/material';
import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setemail] = useState('');
    const [alerting,setAlerting]= React.useState(false)
    const [message, setMessage] = useState('');
    const matches = useMediaQuery('(min-width:879px)');

  return (
    <div style={{backgroundColor:'#141414'}} id='form'>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:'60px'}}>
        <Typography sx={{color:'white',fontSize:'25px',}}>WANT TO PAMPER YOUR CAR?
 </Typography>
<Typography sx={{color:'white',fontSize:'25px',}}>TALK TO US!</Typography>
</Stack>

<Container sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
<Stack direction={matches ? 'row' : 'column'} gap={2}>
          <Grid>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white'
                }
              }}
              sx={{borderRadius:'5px',  width: matches?'300px':'310px', border: '1px solid white', 
              '&:focus': { border: '1px solid white' },'.MuiInputBase-input':{color:"white"} }}
            />
          </Grid>
          <Grid>
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white' 
                }
              }}
              sx={{borderRadius:'5px',  width: matches?'300px':'310px', border: '1px solid white', 
              '&:hover': { border: '1px solid white' },'.MuiInputBase-input':{color:"white"} }}
            />
          </Grid>
        </Stack>

        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <Stack direction={matches ? 'row' : 'column'} gap={2} sx={{ marginTop: '20px' }}>
          <Grid>
          <PhoneInput
            country={'us'}
            enableSearch={true}
            value={phone}
            onChange={setPhone}
            inputStyle={{backgroundColor:'transparent',  width: matches?'300px':'310px'
            ,color:'white',fontSize:'13px',border:'1px solid white',
            borderRadius:'5px',height:'57px',marginTop:'-15px'
             }}
          />
          </Grid>
          <Grid>
            <TextField
              label='Email'
              type='email'
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white' 
                }
              }}
              sx={{ borderRadius:'5px', width: matches?'300px':'310px', 
              border: '1px solid white', '&:hover': { border: '1px solid white' } ,'.MuiInputBase-input':{color:"white"}}}
            />
          </Grid>
        </Stack>
        <Grid sx={{ marginTop: '20px' ,marginBottom:'50px',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <TextareaAutosize
        onChange={(e) => { setMessage(e.target.value) }}
        name="message"
        placeholder='Message'
        value={message}
        cols={matches ? 90 : 46}
        className="custom-textarea"
        style={{ resize: 'none', overflow: 'auto', height:'100px',width:matches?'610px':'77%' }}
        />
        </Grid>
        <Button sx={{color:'white',bgcolor:'#C71B1B','&:hover':{color:'white',bgcolor:'#C71B1B'}
            ,paddingLeft:'20px',pr:'20px',width:matches?'630px':'310px',mb:'30px'}}>SEND</Button>
        </Stack>
        </Container>
    </div>
  )
}
