import React from 'react'
import Slider from "react-slick";
import Paper from '@mui/material/Paper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './ProductPage';
const Trending = (props) => {
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
        return (
          <div className='slider-container'>
            <h2 style={{color:'#1976d2',marginLeft:'2rem'}}>{props.title}</h2>
            <Slider {...settings}>
              <ProductPage />
              <ProductPage />

              <ProductPage />
              <ProductPage />
              <ProductPage />
              <ProductPage />
              <ProductPage />
              <ProductPage />
              <ProductPage />
              <ProductPage />
              <ProductPage />

            </Slider>
          </div>
        );
      }


export default Trending