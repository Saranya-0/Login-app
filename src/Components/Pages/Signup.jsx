import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, Row, Col, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

// Validation schema using Yup
const signupValidationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

function Signup() {
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
                <Col
                  md={6}
                  className="d-flex align-items-center"
                  style={{
                    background: '#1c92d2',
                    borderRadius: '15px 0 0 15px',
                    color: 'white',
                  }}
                >
                  <div className="p-4 text-center w-100">
                    <h3>Come join us!</h3>
                    <p>
                      We are so excited to have you here! If you haven’t already, create an account to
                      get access to exclusive offers, rewards, and discounts.
                    </p>
                    <Link
                      to="/"
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
                  <Formik
                    initialValues={{
                      firstName: '',
                      lastName: '',
                      email: '',
                      password: '',
                      confirmPassword: '',
                    }}
                    validationSchema={signupValidationSchema}
                    onSubmit={(values) => {
                      // Add signup logic here
                      console.log('Signing up with:', values);
                    }}
                  >
                    {({ handleSubmit, errors, touched }) => (
                      <Form onSubmit={handleSubmit}>
                        {/* First Name Field */}
                        <div className="mb-3">
                          <label htmlFor="firstName">First Name</label>
                          <Field
                            type="text"
                            name="firstName"
                            placeholder="Enter first name"
                            className={`form-control ${
                              errors.firstName && touched.firstName ? 'is-invalid' : ''
                            }`}
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* Last Name Field */}
                        <div className="mb-3">
                          <label htmlFor="lastName">Last Name</label>
                          <Field
                            type="text"
                            name="lastName"
                            placeholder="Enter last name"
                            className={`form-control ${
                              errors.lastName && touched.lastName ? 'is-invalid' : ''
                            }`}
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                          <label htmlFor="email">Email Address</label>
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
                            placeholder="Password"
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

                        {/* Confirm Password Field */}
                        <div className="mb-3">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className={`form-control ${
                              errors.confirmPassword && touched.confirmPassword
                                ? 'is-invalid'
                                : ''
                            }`}
                          />
                          <ErrorMessage
                            name="confirmPassword"
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
                          Sign Up
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
