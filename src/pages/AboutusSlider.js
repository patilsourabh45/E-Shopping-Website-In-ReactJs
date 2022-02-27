import React from 'react'
import Paper from '@mui/material/Paper';
import adidas from '../images/adidas.svg'
import cartier from '../images/cartier_- logo-55x16.svg'
import gucci from '../images/gucci_- logo-100x17.svg'
import chanel from '../images/chanel_- logo-100x16.svg'
import nike from '../images/nike_- logo-100x53.svg'
import Grid from '@mui/material/Grid';

const Brandcall = () => {
  return (
       <>
    <Paper elevation={0} style={{display:'flex',justifyContent:'space-evenly',marginBottom:'3rem',marginTop:'3rem', backgroundColor: "pink"}}>
       <Grid container style={{    marginLeft: "60px"}}>
    <Grid item xs={6}  sm={2}>
        <img src={adidas}   style={{height:'4rem',width:'4rem',color:'gray',opacity:'0.5'}} />
     </Grid>
     <Grid item xs={6}  sm={2}>
        <img src={cartier}   style={{height:'4rem',width:'4rem',color:'gray',opacity:'0.5'}} />
        </Grid>
        <Grid item xs={6}  sm={2}>  
        <img src={gucci}   style={{height:'4rem',width:'4rem',color:'gray',opacity:'0.5'}} />
        </Grid>
        <Grid item xs={6}  sm={2}>  
        <img src={chanel}   style={{height:'4rem',width:'4rem',color:'gray',opacity:'0.5'}} />
        </Grid>
        <Grid item xs={6}  sm={2}>  
        <img src={nike}   style={{height:'4rem',width:'4rem',color:'gray',opacity:'0.5'}} />
        </Grid>
        <Grid item xs={6}  sm={2}>  
        <img src={adidas}   style={{height:'4rem',width:'4rem',color:'gray',opacity:'0.5'}} />
        </Grid>
</Grid>

    </Paper>
    </>
  )
}

export default Brandcall