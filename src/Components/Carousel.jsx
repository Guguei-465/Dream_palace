import React from 'react'
//  import image1 from '../images/image1.jpg'
// import image2 from '../images/image2.jpg'
// import image3 from '../images/image3.jpg'

const Courosel = () => {
  return (
    <div id="carouselExample" className="carousel slide row justify-content-center" data-bs-ride="carousel">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Image} className="d-block w-100" height="200px" alt="slide 1" />
        </div>
        <div className="carousel-item">
          <img src={Image} className="d-block w-100" height="200px"  alt="slide 2" />
        </div>
        <div className="carousel-item">
          <img src={Image} className="d-block w-100" height="200px"  alt="slide 3" />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon "></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  )
}

export default Courosel