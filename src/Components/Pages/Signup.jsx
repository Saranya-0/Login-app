import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Signup() {

    const [showAlert, setShowAlert] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const firstName = e.target.elements.formFirstName.value;
    const lastName = e.target.elements.formLastName.value;
    const email = e.target.elements.formBasicEmail.value;
    const password = e.target.elements.formBasicPassword.value;
    const confirmPassword = e.target.elements.formConfirmPassword.value;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      // Add signup logic here
      console.log('Signing up with', { firstName, lastName, email, password });
    }
  };
  return (
    <div>
         <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6db3f2, #1c92d2)',
      }}
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} md={10} lg={8}>
          <Card className="shadow-lg" style={{ borderRadius: '15px' }}>
            <Row className="g-0">
              {/* Left Side */}
              <Col md={6} className="d-flex align-items-center" style={{ background: '#1c92d2', borderRadius: '15px 0 0 15px', color: 'white' }}>
                <div className="p-4 text-center w-100">
                  <h3>Come join us!</h3>
                  <p>
                    We are so excited to have you here! If you haven’t already, create an account to get
                    access to exclusive offers, rewards, and discounts.
                  </p>
                  <Link
                    to="/login"
                    className="text-decoration-none"
                    style={{ color: 'white', fontWeight: 'bold' }}
                  >
                    Already have an account? Sign In
                  </Link>
                </div>
              </Col>

              {/* Right Side */}
              <Col md={6} className="p-4">
                <h3 className="text-center mb-4" style={{ color: '#1c92d2' }}>
                  Sign Up
                </h3>
                {showAlert && <Alert variant="danger">Please fill in all fields!</Alert>}
                <Form onSubmit={handleSignup}>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      className="p-2"
                    />
                  </Form.Group>

                  <Form.Group controlId="formLastName" className="mt-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      className="p-2"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail" className="mt-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="p-2"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mt-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="p-2"
                    />
                  </Form.Group>

                  <Form.Group controlId="formConfirmPassword" className="mt-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      className="p-2"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 mt-4"
                    style={{ backgroundColor: '#1c92d2', border: 'none' }}
                  >
                    Sign Up
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Signup