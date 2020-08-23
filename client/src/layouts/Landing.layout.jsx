import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

const LandingLayout = ({ children }) => (
  <Container fluid className='bg-white'>
    <Row>
      <Col
        className="p-0"
        lg="12"
        md="12"
        sm="12"
        tag="main"
      >
        {children}
      </Col>
    </Row>
  </Container>
);

LandingLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

LandingLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default LandingLayout;
