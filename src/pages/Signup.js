import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import "../css/login.scss"
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Signup() {
  return (
    <Grid className="signupCard" item xs={12} sm={6} lg={4}>  
    <Card className="signup-card" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{textAlign:"center"}} sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
         Signup
        </Typography>
        <div className="email-margin">
        <TextField className="email-text"  id="standard-basic" label="Name" variant="standard" /> 
        </div>  
        <div className="email-margin">
        <TextField className="email-text" id="standard-basic" label="Email" variant="standard" /> 
        </div>
        <div  className="email-margin">
        <TextField className="email-text"  id="standard-basic" label="Mobile Number" variant="standard" /> 
        </div>
        <div  className="email-margin">
        <TextField className="email-text"  id="standard-basic" label="New Password" variant="standard" /> 
        </div>  
        <div>
        <TextField className="email-text"  id="standard-basic" label="Confirm Password" variant="standard" /> 
        </div>     
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
        <Button size="large" variant="contained">Signup</Button>
      </CardActions>
      <p className="p-style">Already have an account? <Link className="card-link" to="/login">Login</Link></p>
    </Card>
    </Grid>
  );
}
