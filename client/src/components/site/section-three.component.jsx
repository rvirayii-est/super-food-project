import React from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import { catches } from "../../data/catch";
import SectionThreeImage from "./section-three-image.component";

const LandingSectionThree = props => {
  return (
    <Container fluid className="section-three">
      <Row className="mt-5">
        <Col
          className="my-3 d-flex flex-column justify-content-center align-items-center text-center"
          lg="12"
          xl="12"
          md="12"
          sm="12"
          xs="12"
        >
          <h3 className="section-three-catch-heading mb-5">
            A Moments Delivered on Time
          </h3>
          <p className="section-three-catch">
            Never miss a moment with your family and have your orders delivered
            right in front of your doorstep. Food delivery is now available in
            areas of Metro Manila, Bicol, Cebu and will be quickly expanding to
            other areas soon.
          </p>
        </Col>
      </Row>
      <Row>
        {catches.map(items => (
          <SectionThreeImage key={items.id} item={items} />
        ))}
      </Row>
    </Container>
  );
};

LandingSectionThree.propTypes = {};

export default LandingSectionThree;
