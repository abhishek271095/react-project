import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const Services = ()=>{

    return(
        <Container fluid className="">
            <Container  >
            <h3 className="text-center p-5"> Services</h3>
                <Row>
                    <Col className="border border-dark rounded mb-5 m-2">
                    <i class="fas fa-globe-europe text-center d-block pt-3" style={{fontSize: "70px"}}></i>
                    <h4 className="text-dark text-center pt-2" > This is Heading</h4>
                    <p>
                    Learn from top engineers and educators from across the globe
                    </p>
                    </Col>
                    <Col  className="border border-dark rounded mb-5 m-2">
                    <i class="fas fa-file-word  text-center d-block pt-3" style={{fontSize: "70px"}}></i>
                    <h4 className="text-dark text-center pt-2" > This is Heading</h4>
                    <p>
                    Fully customizable curriculum built for your child
                    </p>
                    </Col>
                    <Col  className="border border-dark rounded mb-5 m-2">
                    <i class="far fa-file-pdf  text-center d-block pt-3" style={{fontSize: "70px"}}></i>
                    <h4 className="text-dark text-center pt-2" > This is Heading</h4>
                    <p>
                    Global builder community for kids 
                    </p>
                    </Col>
                    <Col  className="border border-dark rounded mb-5 m-2">
                    <i class="fas fa-drum  text-center d-block pt-3" style={{fontSize: "70px"}}></i>
                    <h4 className="text-dark text-center pt-2" > This is Heading</h4>
                    <p>
                    BROUGHT TO YOU BY A TEAM FROM
                    </p>
                    </Col>
                </Row>
            </Container>



        </Container>
    )
}
export default Services;