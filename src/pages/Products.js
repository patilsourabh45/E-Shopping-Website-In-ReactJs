
import  React,{useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import ProductPage from "../pages/ProductPage.js"
import axios from 'axios';

 function Products() {
   const[data,setData] = useState([])
  useEffect(async() => {
    try {
      const allData = await axios.get('https://fakestoreapi.com/products')
      // console.log(data2)
      // console.log('title',data2.data.title)
      //men's clothing
        setData(allData.data)
    
    } catch (error) {
      console.log(error);
    }
    
    
    })
    
  return (
      <>
      <h1 style={{textAlign:"center"}}>Products</h1> 
    <Grid container spacing={4} style={{padding:"20px"}}>
      {data.map((product) => {
      
 return <ProductPage title={product.title} image={product.image} price={product.price} key={product.key}/>
  
      })}
   
   
    </Grid>

     </>
  );
}

export default Products;