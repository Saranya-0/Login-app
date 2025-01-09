import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
    const [showAlert, setShowAlert] = useState(false);

    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.elements.formBasicEmail.value;
      const password = e.target.elements.formBasicPassword.value;
  
      if (!email || !password) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
        // Add login logic here
        console.log('Logging in with', { email, password });
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
        <Col xs={12} md={6} lg={4}>
          <Card className="shadow-lg" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <h3 className="text-center mb-4" style={{ color: '#1c92d2' }}>
                Login
              </h3>
              {showAlert && <Alert variant="danger">Please fill in all fields!</Alert>}
              <Form  onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
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

                <Form.Group controlId="formShowPassword" className="mt-3">
                  <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-4"
                  style={{ backgroundColor: '#1c92d2', border: 'none' }}
                >
                  Sign In
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Link
                  to="/signup"
                  className="text-decoration-none"
                  style={{ color: '#1c92d2' }}
                >
                  Don't have an account? Sign Up
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Login