import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import MyOrders from './pages/MyOrders';
import Products from './pages/Products';
import Signup from './pages/Signup';
import Pagenotfound from './pages/Pagenotfound';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer'

function App() {
  return (
    <>
        <BrowserRouter>
      <div>
        <Header></Header>

      </div>
      <div style={{ height: "150px" }}></div>
      <Routes>
        <Route path='/' element={<HomePage />} exact></Route>
        <Route path='/products' element={<Products />} ></Route>
        <Route path='/myorders' element={<MyOrders />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/aboutus' element={<AboutUs />} ></Route>
        <Route path='*' element={<Pagenotfound />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>

    </>
  );
}

export default App;
