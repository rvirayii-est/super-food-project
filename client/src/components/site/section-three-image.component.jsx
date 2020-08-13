import React from "react";
import { Col, Row } from "shards-react";

const SectionThreeImage = ({ item }) => {
  const { id, imageURL, heading, description } = item;
  return (
    <Col className="my-5 py-5" lg="12" xl="12" md="12" sm="12" xs="12">
      <Row>
        <Col className={id === 2 ? 'order-2' : ''} lg="6" xl="6" md="6" sm="12" xs="12">
          <div className={id === 1 ? "section-three-img-container float-right" : "section-three-img-container ml-5"}>
            <img alt={heading} src={imageURL} className="section-three-img" />
            <div className="img-frame"></div>
          </div>
        </Col>
        <Col className={id === 2 ? 'order-1 text-right d-flex justify-content-end align-items-end flex-column pr-5' : ''}  lg="6" xl="6" md="6" sm="12" xs="12">
          <h3 className="section-three-img-heading">{heading}</h3>
          <p className="section-three-img-paragraph">{description}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SectionThreeImage;
