
import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProductPage from "../pages/ProductPage.js"

 function Products() {
  return (
      <>
      <h1 style={{textAlign:"center"}}>Products</h1> 
    <Grid container spacing={4} style={{padding:"20px"}}>
     <ProductPage></ProductPage>
     <ProductPage></ProductPage>
     <ProductPage></ProductPage>
     <ProductPage></ProductPage>
     <ProductPage></ProductPage>
     <ProductPage></ProductPage>
     <ProductPage></ProductPage>
     <ProductPage></ProductPage>
    </Grid>

     </>
  );
}

export default Products;