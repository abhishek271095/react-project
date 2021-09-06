import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const Footer = ()=>{

    return(
        <div>
         <Container className="bg-dark" fluid>
<Container className="text-light" >
		<Col className="">
			<h4 className="d-inline-block pt-4 float-left">Find Us On: </h4>

			<ul className="list-inline d-inline-block">

			 <li className="list-inline-item p-3"><i className="fab fa-facebook-f text-light"></i></li>
			 <li className="list-inline-item"> <i className="fab fa-twitter text-light"></i></li>
			 <li className="list-inline-item p-3"><i className="fab fa-tumblr text-light"></i> </li>
			 <li className="list-inline-item"><i className="fab fa-pinterest text-light"></i></li>
		    </ul>
		</Col>
		<Col className="">
			<Row className="mt-4">

			<Col >
				<h4> Who we are </h4>
				<ul className="list-unstyled pt-2 ">
					<li><i className="fas fa-phone p-2 text-warning" ></i> 123-23-4345</li>
					<li><i className="fas fa-envelope p-2 text-warning"></i>example@example.com</li>
					<li><i className="fas fa-map-marker-alt p-2 text-warning"></i>Santa Monica BLVD Los Angeles</li>
				</ul>
			</Col>
			<Col >
				<h4> Join Our Newsletters </h4>
				<p className="pt-2">Subscribe to our newsletters. Be in touch with latest news,special offer, etc.</p>
				<Col className="form-group">
					<label> <b>Email</b></label>
					<input type="name" name="name" className="input-group rounded border border-light mt-2" />
					
				</Col>
				<button className="btn btn-info  mt-4 w-50"> Subscribe </button>
			</Col>
			<Col >
				<h4> Information </h4>
				<ul className="list-unstyled pt-2">
					<li><i className="fas fa-chevron-right p-2 text-warning"></i> Frequently asked questions</li>
					<li><i className="fas fa-chevron-right p-2 text-warning"></i>Become a Vendor</li>
					<li><i className="fas fa-chevron-right p-2 text-warning"></i>Warranty Detail</li>
					<li><i className="fas fa-chevron-right p-2 text-warning"></i>Delivery to your City</li>
					<li><i className="fas fa-chevron-right p-2 text-warning"></i>Handbook for materials</li>
					<li><i className="fas fa-chevron-right p-2 text-warning"></i>ECO Cerficates</li>
				</ul>
			</Col>
			<Col>

				<h4> We Accept </h4>
				<p>lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Col>
          <Row>
			  <Col>
			  <span>< i className="fab fa-cc-amex  " style={{fontSize: "50px"}} ></i></span>	
          <span>	<i className="fab fa-cc-discover " style={{fontSize: "50px"}} ></i></span>	
          <span>	<i className="fab fa-cc-mastercard " style={{fontSize: "50px"}} ></i></span>	
          <span>	<i className="fab fa-cc-visa " style={{fontSize: "50px"}} ></i></span>	
			  </Col>
     
      
          </Row>
          <Row>
			  <Col>
          <i className="fab fa-cc-amazon-pay  list-inline-item" style={{fontSize: "50px"}}  ></i>
            <i className="fab fa-cc-paypal  list-inline-item" style={{fontSize: "50px"}} ></i>
            <i className="fab fa-cc-jcb  list-inline-item" style={{fontSize: "50px"}}  ></i>
            <i className="fab fa-cc-stripe list-inline-item" style={{fontSize: "50px"}} ></i>
			</Col>
          </Row>
        </Col>
				
			</Col>
		</Row>
		</Col>
    

		<Container className="bg-dark p-3">
			<p className="lead ">2021@DesignesBy:- Abhishek Yadav</p>
		
	</Container>

  </Container>
  </Container>
      
        </div>
    )
}

export default Footer;