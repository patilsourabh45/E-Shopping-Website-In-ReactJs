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

export default function Login() {
  return (
    <div className="login-background">
    <Grid className="loginCard " item xs={12} sm={6} lg={4}>  
    <Card className="login-card-1" sx={{ minWidth: 275 }}>
      <CardContent>

        <Typography className="login-heading" color="text.secondary" gutterBottom>
         Login
        </Typography>

        <div className="email-margin">
        <TextField  
        required 
        placeholder="Enter Email"
        className="email-text" 
        id="standard-basic" 
        label="Email" 
        variant="standard" /> 
        </div>

        <div className="email-margin">
        <TextField 
        required 
        placeholder="Enter Password"
        className="email-text"  
        id="standard-basic" 
        label="Password" 
        variant="standard" /> 
        </div>   
      </CardContent>

      <Typography className="forgot-password"><Link className="card-link" to="#">Forgot Password ?</Link></Typography>

      <Typography className="login-policy" color="text.secondary">By continuing, you agree to Flipkart's <Link className="login-policy-1" to="#">Terms of Use </Link>and <Link className="login-policy-1"  to="#">Privacy Policy</Link>.</Typography>
      
      <CardActions style={{justifyContent:"center"}}>
        <Button size="large"  variant="contained">Login</Button>
      </CardActions>

      <p className="p-style">Don't have an account? <Link className="card-link" to="/signup">Signup</Link></p>
    </Card>
    </Grid>
    </div>
  );
}
