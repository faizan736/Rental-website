import React, { useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {
    const [navHeight,setnavHeight] = useState(false);
    const navigate= useNavigate();
    const gotToHome =() =>{
        navigate('/');
    } 
  return (
    <nav className={navHeight ? "show nav":"nav"}>
        <div className="logo" onClick={()=>gotToHome()}>LUXURY RENTAL</div>
        <ul>
            <li>
                <Link to="/aboutus">ABOUT US</Link>
            </li>
            <li>
            <Link to="/villas">VILLAS</Link>
            </li>
            <li>
            <Link to="/contact">CONTACT</Link>
            </li>
        </ul>
        <RxHamburgerMenu className='hamburger' onClick={()=>setnavHeight(!navHeight)}/>
      
    </nav>
  )
}

export default Navbar
