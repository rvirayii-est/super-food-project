import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

const DefaultLayout = ({ children }) => (
  <Container fluid className='mt-5 pt-5' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Row>
      <Col
        className="p-0"
        lg="12"
        md="12"
        sm="12"
      >
        {children}
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
