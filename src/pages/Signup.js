import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../css/login.scss'
import image from "../images/image2.jpg"
import {Link} from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="#">
        Flipkart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid className="signup-inputs" container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
        className="image-1"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: "../images/image2.jpg",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* <img className="background-img" alt="background-image" src={image} /> */}
          
          </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
           className="mainbox-1"
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Signup
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
           
            <Grid container xs ={12} spacing={2}>  
            <Grid style={{marginTop:"16px"}} item xs={12}>
               <TextField
                placeholder="Enter Name"
                margin="normal"
                required
                fullWidth
                label="Name"
                autoFocus
                className="email-text" 
              />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
              placeholder="Enter Email"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className="email-text" 
              />
              </Grid>

              <Grid item xs={12} sm={6}>
               <TextField
                placeholder="Enter Mobile Number"
                margin="normal"
                required
                fullWidth
                label="Mobile Number"
                type="number"
                className="email-text" 
              />
              </Grid>

              <Grid item xs={12} sm={6}>
               <TextField
                placeholder="Enter New Password"
                margin="normal"
                required
                fullWidth
                label="New Password"
                type="password"
                autoComplete="current-password"
                className="email-text" 
              />
              </Grid>

              <Grid item xs={12} sm={6}>
               <TextField
               placeholder="Confirm New Password"
                margin="normal"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                className="email-text" 
              />
              </Grid>




              </Grid>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Signup
              </Button>
                <Grid item style={{float:"right"}}>
                  <Link className="card-link" to="/login">
                   Already have an account? Login
                  </Link>
                </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}