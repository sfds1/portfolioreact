import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Contact() {
  return (
    <div className="container">
      <h1>Contact Page</h1>
      <Form>

        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
         </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message area</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>

    </div>
  );
}

export default Contact;

