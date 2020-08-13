import React from "react";

import { Container, Row } from "shards-react";

// data
import { offers } from "../../data/offers";
import OfferBox from "./offer-box.component";
const Offers = () => {
  return (
    <Container  className='offers-container shadow-lg p-0'>
      <Row className="d-flex bg-white my-5 rounded">
        {offers.map(offer => (
          <OfferBox key={offer.id} offer={offer} />
        ))}
      </Row>
    </Container>
  );
};

export default Offers;
