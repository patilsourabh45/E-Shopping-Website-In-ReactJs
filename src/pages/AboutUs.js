import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import "../css/aboutus.scss"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from "../images/image2.jpg";
import image1 from "../images/tshirt1.jpg"


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function AboutUs(){
    return(
        <>
        <div className="header-aboutus">About Us </div>
        <Box sx={{ width: '100%',marginTop:3}}>
      <Grid container>
        <Grid item xs={12}  sm={4}>
          <Card className="aboutus-card" sx={{ minWidth: 275,height:300,borderRadius:0,boxShadow:0 }}>
           <CardContent >
             <img src={image} alt="image" height="300px" width="100%"></img>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className="aboutus-card" sx={{ minWidth: 275,height:300,borderRadius:0,boxShadow:0 }}>
            <CardContent >
        <Typography style={{fontWeight:"600"}} className="aboutus-text" sx={{ fontSize: 16, }} color="text.secondary" gutterBottom>
         WHO WE ARE
        </Typography>

        <Typography className="aboutus-text" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Flipkart is an Indian e-commerce company, headquartered in Bangalore, Karnataka, India, and incorporated in Singapore as a private limited company. The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.
        </Typography> 
          </CardContent>
           </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card className="aboutus-card" sx={{ minWidth: 275 ,height:300,borderRadius:0,boxShadow:0}}>
          <CardContent>
             <img src={image1} alt="image1" height="300px" width="100%"></img>
            </CardContent>
   
          </Card>
        </Grid>
      </Grid>
    </Box>
    
        </>
    )
}

export default AboutUs;


