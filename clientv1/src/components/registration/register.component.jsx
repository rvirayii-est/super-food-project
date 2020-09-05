import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import { OrGroup } from "../common/or.component";

// redux
import { connect } from "react-redux";
import { register } from "../../store/actions/auth.action";
import PrivacyPolicy from "../privacy-policy/privacy-policy.component";
import { Link, Redirect } from "react-router-dom";

const RegisterAccountDetails = ({ title, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = formData;
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Password do not match!");
    } else {
      register({ name, email, password });
      console.log("Success");
    }
  };

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col md="12">
              <Button className="btn-block" theme="danger">
                Sign up with Google
              </Button>
              <Button className="btn-block" theme="primary">
                Sign up with Facebook
              </Button>
            </Col>
            <Col md="12">
              <OrGroup />
            </Col>
            <Col md="12">
              <Form onSubmit={e => handleSubmit(e)}>
                <Row form>
                  {/* Full Name */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feFirstName">Full Name</label>
                    <FormInput
                      id="FullName"
                      placeholder="Full Name"
                      value={name}
                      name="name"
                      onChange={e => handleChange(e)}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="12" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value={email}
                      name="email"
                      onChange={e => handleChange(e)}
                      autoComplete="email"
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Password */}
                  <Col md="12" className="form-group">
                    <label htmlFor="password">Password</label>
                    <FormInput
                      type="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      name="password"
                      onChange={e => handleChange(e)}
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Row
                  form
                  className="d-flex align-content-center justify-content-center"
                >
                  {/* Confirm Password */}
                  <Col md="12" className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <FormInput
                      type="password"
                      id="confirmPassword"
                      placeholder="Password"
                      value={confirmPassword}
                      name="confirmPassword"
                      onChange={e => handleChange(e)}
                      autoComplete="current-password"
                    />
                  </Col>
                  <Col>
                    <PrivacyPolicy />
                  </Col>
                  <Col className="text-center" md="12">
                    <Button theme="accent">Create new account</Button>
                  </Col>
                  <Col>
                    <h5 className="my-4">
                      Already have an account?
                      <Link to="/login">Sign in</Link>
                    </h5>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

RegisterAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

RegisterAccountDetails.defaultProps = {
  title: "Account Details"
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(RegisterAccountDetails);
