
import  React,{useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import tshirt1 from "../images/tshirt1.jpg"
import "../css/products.scss"
 function ProductPage(props) {

  return (
      <>
      {/* <h1 style={{textAlign:"center"}}>Products</h1> */}
    <Grid className="card-btm" item xs={12} sm={6} lg={3}>  
    <Card sx={{ maxWidth: 345 }}  >
        <div className="container">
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt="tshirt"
      />
          <div class="overlay">Quick View</div>
        </div>
      <CardContent style={{padding:"10px"}}>
        <Typography noWrap style={{textAlign:"center"}} gutterBottom variant="h6" component="div" color="text.secondary">
        {props.title}
        </Typography>
        <Typography className="product-price" variant="body2" >
        &#8377; {props.price}
        </Typography>
      </CardContent>
      <CardActions className="addToCart-btn">
        <Button  variant="contained" size="small">Add To Cart</Button>
      </CardActions>
    </Card>
    </Grid>
    </>
  );
}

export default ProductPage;