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
import { connect } from "react-redux";
import { login } from "../../store/actions/auth.action";
import { Redirect } from "react-router-dom";

const LoginAccountDetails = ({ title, login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    login(email, password);
    console.log("Login Success");
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
                Sign in with Google
              </Button>
              <Button className="btn-block" theme="primary">
                Sign in with Facebook
              </Button>
            </Col>
            <Col md="12">
              <OrGroup />
            </Col>
            <Col md="12">
              <Form onSubmit={e => handleSubmit(e)}>
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
                  <Col md="12">
                    <p>
                      <input type="checkbox" /> Always Keep logged in
                    </p>
                  </Col>
                  <Col className="text-center" md="12">
                    <Button theme="accent">Login</Button>
                  </Col>
                </Row>
                <Row
                  form
                  className="d-flex align-content-center justify-content-center"
                >
                  <Col md="12">
                    <p>
                      Don't have an account? Click <a href="/register">Here</a>
                    </p>
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

LoginAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

LoginAccountDetails.defaultProps = {
  title: "Account Details"
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginAccountDetails);
