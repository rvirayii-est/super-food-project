import React from "react";
import { Col, Row } from "shards-react";

const SectionThreeImage = ({ item }) => {
  const { id, imageURL, heading, description } = item;
  return (
    <Col className="my-5 py-5" lg="12" xl="12" md="12" sm="12" xs="12">
      <Row>
        <Col className={id === 2 ? 'order-2 d-md-flex justify-content-lg-start justify-content-md-center' : 'd-md-flex justify-content-md-center justify-content-lg-end'} lg="6" xl="6" md="12" sm="12" xs="12">
          <div className={id === 1 ? "section-three-img-container float-lg-right float-md-none" : "section-three-img-container ml-5"}>
            <img alt={heading} src={imageURL} className="section-three-img" />
            <div className="img-frame"></div>
          </div>
        </Col>
        <Col className={id === 2 ? 'justify-content-sm-center align-items-sm-center order-1 d-flex justify-content-lg-end align-items-lg-end align-items-md-center flex-column pr-5' : 'mt-md-5 pt-md-3 d-md-flex flex-lg-column align-items-md-center align-items-lg-start flex-md-column justify-content-md-center justify-content-lg-start'} lg="6" xl="6" md="12" sm="12" xs="12">
          <h3 className="section-three-img-heading">{heading}</h3>
          <p className={id === 2 ? 'text-lg-right section-three-img-paragraph text-md-center' : "section-three-img-paragraph text-lg-left text-sm-center"}>{description}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SectionThreeImage;
