import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../css/footer.scss"

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#212121"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Box className="footer-head">Shop</Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                 T-shirts
                </Link>
              </Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                  Jeans
                </Link>
              </Box>
              <Box >
                <Link to="/" color="inherit">
                  Sneakers
                </Link>
              </Box>
              
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box className="footer-head">About</Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                  About Us
                </Link>
              </Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                  Forum
                </Link>
              </Box>

              <Box className="footer-options">
                <Link to="/" color="inherit">
                  Careers
                </Link>
              </Box>

              <Box className="footer-options">
                <Link to="/" color="inherit">
                  Corporate Information
                </Link>
              </Box>

            </Grid>
            
            <Grid item xs={12} sm={3}>
              <Box className="footer-head">Support</Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                FAQ
                </Link>
              </Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                  Shipping 
                </Link>
              </Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                  Cancellation & Returns
                </Link>
              </Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                Payment Methods
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box className="footer-head">Contact</Box>
              <Box className="footer-options">
                <Typography color="inherit">
                Customer Service:
                </Typography>
              </Box>
              <Box className="footer-options">
                <Typography color="inherit">
                123-456-7890
                </Typography>
              </Box>
              <Box className="footer-options">
                <Link to="/" color="inherit">
                info@my-domain.com
                </Link>
              </Box>
                
                <Box>
                <Stack style={{cursor:"pointer"}} direction="row" spacing={2}>
                  <Typography><FacebookIcon /></Typography>
                  <Typography><InstagramIcon /></Typography>
                  <Typography><TwitterIcon /></Typography>
                  <Typography><YouTubeIcon /></Typography>
                  </Stack>
              </Box>
            </Grid>
          </Grid>
          <Typography className="footer-copyright">
            Copyright Flipkart &reg; {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </footer>
  );
}