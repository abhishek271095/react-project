import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Carosal.css';
import Button from 'react-bootstrap/Button'



const Cerosal = ()=>{

    return(
        <div>


<Carousel>
<Carousel.Item className="banner">
  {/* <img
    className="d-block w-100"
    src="Banner/butterfly.jpg"
    alt="First slide"
  /> */}
    <h1 className="display-1 text-light text-center pt-5">#Ready for the Next</h1>
    <p className="display-3 text-light text-center pt-5">We Make design driven development <br/> of your web product </p>
  <Carousel.Caption>
    {/* <h3 className="text-warning display-4">First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
<div className="d-grid w-50 p-2 mx-auto d-block mb-5">
<Button variant="light" size="lg"> Read More</Button>
</div>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item className="banner1">
  {/* <img
    className="d-block w-100"
    src="Banner/nature.jpg"
    alt="Second slide"
  /> */}

<h1 className="display-1 text-light text-center pt-5">#Ready for the Next</h1>
    <p className="display-3 text-light text-center pt-5">We Help People Connect <br/> with their right Mentors </p>
  <Carousel.Caption>
    {/* <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
   
   <div className="d-grid w-50 p-2 mx-auto d-block mb-5">
<Button variant="light" size="lg"> Read More</Button>
</div>

  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item  className="banner2">
  {/* <img
    className="d-block w-100"
    src="Banner/math.jpg"
    alt="Third slide"
  /> */}
    <h1 className="display-1 text-light text-center pt-5">#Ready for the Next</h1>
    <p className="display-3 text-light text-center pt-5"> A premium collection of <br/> Unique Products. </p>

  <Carousel.Caption>
    {/* <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}

<div className="d-grid w-50 p-2 mx-auto d-block mb-5">
<Button variant="light" size="lg"> Read More</Button>
</div>

  </Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
    )
}
export default Cerosal;