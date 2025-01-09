import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// Validation schema using Yup
const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

function Login() {
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
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={loginValidationSchema}
                  onSubmit={(values) => {
                    // Add login logic here
                    console.log('Logging in with:', values);
                  }}
                >
                  {({ handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                      {/* Email Field */}
                      <div className="mb-3">
                        <label htmlFor="email">Email address</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter email"
                          className={`form-control ${
                            errors.email && touched.email ? 'is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      {/* Password Field */}
                      <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          className={`form-control ${
                            errors.password && touched.password ? 'is-invalid' : ''
                          }`}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 mt-4"
                        style={{ backgroundColor: '#1c92d2', border: 'none' }}
                      >
                        Sign In
                      </Button>
                    </Form>
                  )}
                </Formik>

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
  );
}

export default Login;
