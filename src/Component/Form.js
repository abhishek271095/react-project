import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import { Container } from 'react-bootstrap';




const Contact=()=>
{
  return(
      
        <Container className="" fluid>
        <h3 className="text-center pt-5"> Contact Us</h3>
            <Row>
          
                <Col className="col-md-4 mx-auto">
                <Form  className="mb-3 mt-3 ">
            <Row className="mb-3 ">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                
                </Form.Group>
                
            </Row>

            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Message </Form.Label>
                <FormControl as="textarea" aria-label="With textarea" />

            </Form.Group>

           

            <Button variant="dark" type="submit"  className="mx-auto d-block w-75">
                Submit
            </Button>
    </Form></Col>
               
            </Row>
        </Container>

  );
}
  
export default Contact;