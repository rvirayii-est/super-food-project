import React from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// svg for sign up
import { ReactComponent as SignUpSVG } from "../assets/register/signInSVG.svg";
import LoginAccountDetails from "../components/registration/login.component";

const LoginView = () => (
    <Container fluid className="bg-white">
        <Row>
            <Col xl="8" lg="8" md="8" sm="12" xs="12">
                <SignUpSVG />
            </Col>
            <Col xl="4" lg="4" md="4" sm="12" xs="12">
                <h3 className="text-center font-weight-bolder">Sign in  to FoodKart</h3>
                <LoginAccountDetails />
            </Col>
        </Row>
    </Container>
);

LoginView.propTypes = {};

LoginView.defaultProps = {};

export default LoginView;
