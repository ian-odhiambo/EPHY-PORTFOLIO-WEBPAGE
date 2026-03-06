import {Outlet} from 'react-router-dom'
import Navbar from '../COMPONENTS/Navbar'
import Footer from '../COMPONENTS/Footer'

const MainLayOut = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayOut