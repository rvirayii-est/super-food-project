import React from "react";

import { Col } from "shards-react";

// icons
import { Icon } from "@iconify/react";
const OfferBox = ({ offer: { icon, title, description } }) => {
  return (
    <Col
      className="offer-content d-flex flex-column justify-content-center align-items-center p-5 text-center"
      lg="3"
      xl="3"
      md="6"
      sm="12"
      xs="12"
    >
        <Icon icon={icon} className="icon" />
        <div className="title">{title}</div>
        <div className="description">{description}</div>
    </Col>
  );
};

export default OfferBox;
