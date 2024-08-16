import React from 'react'
import {Link,useLocation} from "react-router-dom"

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname ==='/';
  return (
    <>
    <footer className={isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"}>
        <div className="container">
            <h4>LUXURY  RENTALS</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis obcaecati quas ea facilis distinctio nihil nesciunt! Explicabo harum molestiae dignissimos.</p>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/termsandconditons'}>Terms And Conditions</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>

        </div>
        <div className="container">
            <h4>Connect with us</h4>
            <p>+123456789</p>
            <p>abc@gmail.com</p>
            <p>All Rights reserved by faizan</p>
        </div>
      
    </footer>
    </>
  )
}

export default Footer
