import React from 'react'
import Carousel from 'react-material-ui-carousel'
import '../css/homepage.scss'
import Slider from "react-slick";
import Paper from '@mui/material/Paper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderBanner(){
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <>
         <div>
   
        <Slider {...settings}>
          <div>
          <img src='https://rukminim1.flixcart.com/flap/844/140/image/39b38d166ed16c76.jpg?q=50' className='banner-img'/>
          </div>
          <div>
        <img src=' "https://rukminim1.flixcart.com/flap/50/50/image/ff938f15fd1feb73.jpg?q=50"'  className='banner-img'/>
          </div>
          <div>
        <img src="https://rukminim1.flixcart.com/flap/50/50/image/3c50c42c22273051.jpg?q=50"  className='banner-img'/>
          </div>
          <div>
        <img src="https://rukminim1.flixcart.com/flap/50/50/image/e3c7c13c24848f1f.jpg?q=50"  className='banner-img'/>
          </div>
        
        </Slider>
      </div>

        </>
    )
}

export default SliderBanner;