import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {SiFacebook} from "react-icons/si";
import {FaGoogle} from "react-icons/fa";

const Create = () => {
  return (
    <>
      <Form className="mt-5">
        
        <FloatingLabel
          controlId="floatingInput"
          label="First Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Confirm Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" type="submit" className="m-3">
          Submit
        </Button><br/>
        <a href="http://www.facebook.com" style={{textDecoration:"none"}}><SiFacebook/> Sign in with Facebook</a><br/>
        <a href="http://www.google.com" style={{textDecoration:"none"}}><FaGoogle/> Sign in with Google</a>
      </Form>
    </>
  );
};

export default Create;
