import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import axios from 'axios'

export default function PrivacyPolicy() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <div style={{backgroundColor:'black'}}>
              <div
                        style={{
                            height: 400,
                            maxWidth: '100%',
                            width: '100%',
                            backgroundColor:'#9F0202'
                        }}
                    ></div>
                   <div 
                   style={{position:'absolute',top:'90px',width:'100%',backgroundColor:'rgba(0, 0, 0,0.5)',
                   height:470}}>
                    </div>   
                    <>
                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                    <Typography sx={{color:'white',position:'absolute',top:'250px',
                    fontWeight:'bold',fontSize:'40px'}}>Privacy Policy</Typography>
                    </div>
                    <div style={{marginTop:'50px',display:'flex',flexWrap:'wrap'
                    ,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
                      <Typography sx={{fontSize:'20px',color:'white',marginBottom:'50px',marginTop:'20px'}}>
                        privacy policy
                      </Typography>
                    </div></>
    </div>
  )
}
