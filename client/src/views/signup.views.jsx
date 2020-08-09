import React from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// svg for sign up
import { ReactComponent as SignUpSVG } from "../assets/register/signUpSVG.svg";
import RegisterAccountDetails from "../components/registration/register.component";

const SignUpView = () => (
  <Container fluid className="bg-white">
    <Row>
      <Col xl="8" lg="8" md="8" sm="12" xs="12">
        <SignUpSVG />
      </Col>
      <Col xl="4" lg="4" md="4" sm="12" xs="12">
        <h3 className="text-center font-weight-bolder">Sign Up to FoodKart</h3>
        <RegisterAccountDetails />
      </Col>
    </Row>
  </Container>
);

SignUpView.propTypes = {};

SignUpView.defaultProps = {};

export default SignUpView;
