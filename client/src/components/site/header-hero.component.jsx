import React from "react";

import { Row, Col, Container } from "shards-react";

// image
import headerHeroImage from "../../assets/header-hero.webp";
import HeaderAddress from "./header-address.component";

const HeaderHero = () => {
  return (
    <Container fluid className="header-hero">
      <Row className="row-full-height">
        <Col className="heading" lg="8" xl="8" md="8" sm="11" xs="11">
          <h1 className="mb-5">Why starve when you have us</h1>
          <h3 className="mb-4 ml-1">We have all the foods you crave</h3>
          <HeaderAddress />
        </Col>

        <Col className="img-container p-0" xl="4" lg="4" md="4" sm="1" xs="1">
          <img className="mt-3" alt="Foods" src={headerHeroImage} />
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderHero;
