import  React,{useEffect,useState} from 'react';
import Brandcall from './Brandcall'
import SliderBanner from './SliderBanner'
import Trending from './Trending'
import Footer from "../components/Footer"
import axios from 'axios';


const HomePage = () => {
  const[mensWear,setMensWear] = useState([])
  const[womensWear,setWomensWear] = useState([])
  const[electronic,setElectronic] = useState([])
  useEffect(async() => {
    try {
      const Elect = await axios.get('https://fakestoreapi.com/products/category/electronics')

      const women = await axios.get("https://fakestoreapi.com/products/category/jewelery")
      const men = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
      setMensWear(men.data)
      setWomensWear(women.data)
      setElectronic(Elect.data)
      console.log('women',womensWear);
    } catch (error) {
      console.log(error);
    }
    
    
    })
    
  return (
    <>
    <div className='home-container'>
<SliderBanner />
<Brandcall />
<Trending header="Deals of the Day (MEN's Wear)" data={mensWear} />
<Trending header="Deals of the Day (WOMEN's Wear)" data={womensWear} />
<Trending header="Deals of the Day (ELECTRONICS)" data={electronic} />
{/* <Trending title='Trending Sneakers' />
<Trending title='Trending T-shirts' /> */}
    </div>
    <Footer></Footer>
    </>
  )
}

export default HomePage