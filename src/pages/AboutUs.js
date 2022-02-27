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
import image1 from "../images/tshirt1.jpg";
import Stack from '@mui/material/Stack';
import AboutusSlider from "../pages/AboutusSlider";
import Footer from "../components/Footer"



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

    <Grid container>
      <Grid item xs={12} sm={12} className="aboutus-black">
      <Stack className="aboutus-stack" direction={{ xs: 'column', sm: 'row' }}>
       <Grid item xs={12} sm={4} className="aboutus-columns">
         <Typography   variant="h4" gutterBottom component="div" className="aboutus-stack-heading">BODY POSITIVITY</Typography>
         
         <Typography variant="body1" gutterBottom className="aboutus-desc">On the occasion of Women’s Day, All roped in body positivity influencers to highlight the trolling women face on social media for their body type. With the campaign, the brand aimed to inculcate encouragement and acceptance for all body types.</Typography>
       </Grid>
       <Grid item xs={12} sm={4} className="aboutus-columns">
       <Typography variant="h4" gutterBottom component="div" className="aboutus-stack-heading">FAIR TRADE</Typography>

       <Typography variant="body1" gutterBottom className="aboutus-desc">
       Companies seeking sustainable supply chains are a critical component of the Fairtrade system – by sourcing Fairtrade products and licensing the FAIRTRADE Marks, they support farmers and workers at Fairtrade producer organizations to take more control over their own futures.
       </Typography>
       </Grid>
       <Grid item xs={12} sm={4} className="aboutus-columns">
       <Typography noWrap variant="h4" gutterBottom component="div" className="aboutus-stack-heading">SUSTAINABLE</Typography>
       <Typography variant="body1" gutterBottom className="aboutus-desc">
       Sustainable fashion brands create fashion in a way which is most considerate of humanity and the environment, reducing the environmental impact wherever possible. The ultimate goal is to have a system which works without leaving a negative footprint.
         </Typography>
       </Grid>
      </Stack>
      </Grid>
      </Grid>
          
      <Grid container xs={12} sm={12} className="aboutus-pink">
        <Typography variant="h4" gutterBottom component="div"  className="aboutus-stack-heading-1">SOME OF OUR TOP BRANDS</Typography>

        <Grid item xs={12} sm={12}>
          <AboutusSlider></AboutusSlider>
          </Grid>
          </Grid>


          <Grid container>
      <Grid item xs={12} sm={12} className="aboutus-white">
      <Stack className="aboutus-stack" direction={{ xs: 'column', sm: 'row' }}>
       <Grid item xs={12} sm={4} className="black-border">
         <Typography style={{color:"black"}}  variant="h4" gutterBottom component="div" className="aboutus-stack-heading">FREE DELIVERY</Typography>
         
         <Typography style={{color:"black"}} variant="body1" gutterBottom className="aboutus-desc">On the occasion of Women’s Day, All roped in body positivity influencers to highlight the trolling women face on social media for their body type. With the campaign, the brand aimed to inculcate encouragement and acceptance for all body types.</Typography>
       </Grid>
       <Grid item xs={12} sm={4} className="black-border">
       <Typography style={{color:"black"}} variant="h4" gutterBottom component="div" className="aboutus-stack-heading">DISCOUNTS</Typography>

       <Typography style={{color:"black"}} variant="body1" gutterBottom className="aboutus-desc">
       Companies seeking sustainable supply chains are a critical component of the Fairtrade system – by sourcing Fairtrade products and licensing the FAIRTRADE Marks, they support farmers and workers at Fairtrade producer organizations to take more control over their own futures.
       </Typography>
       </Grid>
       <Grid item xs={12} sm={4} className="black-border">
       <Typography style={{color:"black"}} noWrap variant="h4" gutterBottom component="div" className="aboutus-stack-heading">EASY RETURN</Typography>
       <Typography style={{color:"black"}} variant="body1" gutterBottom className="aboutus-desc">
       Sustainable fashion brands create fashion in a way which is most considerate of humanity and the environment, reducing the environmental impact wherever possible. The ultimate goal is to have a system which works without leaving a negative footprint.
         </Typography>
       </Grid>
      </Stack>
      </Grid>
      </Grid>

          <Footer />

    
        </>
    )
}

export default AboutUs;


