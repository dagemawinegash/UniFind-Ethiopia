import './Navbar.css'
import logo from '../../assets/logo.png'
import { Outlet } from 'react-router-dom'
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='popular' smooth={true} offset={0} duration={500}>Popular</Link></li>
          <li>News</li>
          <li>City</li>
          <li className='btn my-list-btn'>My List</li>
        </ul> 
      </nav>
      <Outlet/>
    </>
    
  )
}

export default Navbar