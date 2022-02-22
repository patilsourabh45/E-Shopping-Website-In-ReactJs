import React from 'react'
import Brandcall from './Brandcall'
import SliderBanner from './SliderBanner'
import Trending from './Trending'
import Footer from "../components/Footer"


const HomePage = () => {
  return (
    <>
    <div className='home-container'>
<SliderBanner />
<Brandcall />
<Trending title='Deals of the Day' />
<Trending title='Trending Sneakers' />
<Trending title='Trending T-shirts' />
    </div>
    <Footer></Footer>
    </>
  )
}

export default HomePage