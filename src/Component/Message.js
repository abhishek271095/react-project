import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Message = ()=>{

    return(
        <Container className="bg-dark" fluid>
            <h3 className="text-center p-5 text-light"> Blog</h3>
            <Container className="">
            

                    <Row className="">

                    <Col  className="">
                    
                    <img
                    className="blog d-block w-50 h-75 rounded-circle  mx-auto p-5 "
                    src="Banner/demo.jpg"
                    alt="First slide"
                    />

               

                    </Col>

                    <Col className="">

                        <h4 className="p-5 text-light">
                        "We all need someone who inspires,<br/> 
                            us to do better than we know"
                        </h4>
                        <p className="text-light p-4"> It is a long established fact that a reader will be
                        distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it 
                        has a more-or-less normal distribution of letters.</p>

                        <h6 className="text-light p-5"> - Joe Mark </h6>

                    </Col>

                    </Row>
            </Container>

        </Container>
    )
}
export default Message;