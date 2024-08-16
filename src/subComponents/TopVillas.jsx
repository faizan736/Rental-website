import React from 'react'
import {villas} from '../villas'
import {Link} from "react-router-dom"
import {RxDot} from 'react-icons/rx'
import {IoIosPeople} from 'react-icons/io'
import {FaBed,FaBath} from 'react-icons/fa'
import {BiArea} from 'react-icons/bi'
const TopVillas = () => {
  return (
    <>
      <section id='topVillas'> 
        <h1>TOP PICK VILLAS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam a, architecto dolores rerum perspiciatis impedit voluptate officiis iste, facilis, recusandae aut quod sapiente hic!</p>
        <div className="villasContainer">
            {
                villas.slice(0,3).map(element =>{
                    return(
                        <Link className='card' to={`/villa/${element.id}`}>
                            <img src={element.image} alt={element.name} />
                            <div className="location_text">
                                <span>{element.location}</span>
                                <span><RxDot/></span>
                                <span>{element.category}</span>
                            </div>
                            <div className="title_text">
                                {element.name}
                            </div>
                            <div className="specifications">
                                <div className="spec">
                                    <IoIosPeople/>
                                    <span>{element.guests}</span>
                                    Guests
                                </div>
                                <div className="spec">
                                    <FaBed/>
                                    <span>{element.guests}</span>
                                    Bedrooms
                                </div>
                                <div className="spec">
                                    <BiArea/>
                                    <span>{element.guests}</span>
                                    Area
                                </div>
                                <div className="spec">
                                    <FaBath/>
                                    <span>{element.guests}</span>
                                    Bathrooms
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
      </section>
    </>
  )
}

export default TopVillas
