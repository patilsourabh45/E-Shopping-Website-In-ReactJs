import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import '../css/homepage.scss'
function Homepage(){
    const items = [
        {
          
            Source: "https://rukminim1.flixcart.com/flap/844/140/image/39b38d166ed16c76.jpg?q=50"
        },
        {
        
            Source: "https://rukminim1.flixcart.com/flap/50/50/image/ff938f15fd1feb73.jpg?q=50"
        },
        {
          
            Source: "https://rukminim1.flixcart.com/flap/50/50/image/3c50c42c22273051.jpg?q=50"
        },
        {
        
            Source: "https://rukminim1.flixcart.com/flap/50/50/image/e3c7c13c24848f1f.jpg?q=50"
        },
        
        
    ]

    return(
        <>
         <Carousel style={{height:'26rem'}}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </>
    )
}
function Item(props)
{
    return (
        <Paper>
            
<img src={props.item.Source}  className='banner-img'/>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}
export default Homepage;