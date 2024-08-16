import React from 'react'

const Regions = () => {
  return (
    <>
        <section id='regions'>
            <h1>OUR REGIONS</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, accusamus.</p>
            <div className="region_container">
               <div className="card">
               <img src="./region1.jpg" alt="mountains" />
                <h2>Moutains</h2>
                <p><span>90</span>Properties</p>
               </div>
               <div className="card">
               <img src="./region2.jpg" alt="mountains" />
                <h2>Coastline</h2>
                <p><span>52</span>Properties</p>
               </div>
            </div>
        </section>
      
    </>
  )
}

export default Regions
