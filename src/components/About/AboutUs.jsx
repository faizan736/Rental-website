import React from 'react'
import About from '../../subComponents/About'

const AboutUs = () => {
  return (
    <>
        <section id='aboutPage' className='page'>
            <div className="container">
                <img src="/about.jpg" alt="" />
                <div className='content'>
                    <h3>Your peace of mind ,our priority</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque quia sunt repudiandae ipsam itaque iste eos, aspernatur enim tenetur.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, excepturi maiores! Obcaecati, sit voluptatum consectetur nostrum impedit delectus beatae eaque itaque tempore doloremque et porro aspernatur modi odio ut? Possimus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium aperiam placeat.</p>
                </div>
            </div>
            <About/>
        </section>
      
    </>
  )
}

export default AboutUs
