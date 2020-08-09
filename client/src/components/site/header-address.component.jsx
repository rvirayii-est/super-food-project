import React from "react";
import { Card, CardBody, FormInput, Button, Row, Col } from "shards-react";

// icon
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-gridicons/location";

const HeaderAddress = () => {
  return (
    <Card className="header-address">
      <CardBody>
        <Row className="d-flex">
          <Col lg="12" md="12" sm="12">
            <FormInput size="lg" className='address-input' placeholder="Enter your address" />
            <Icon icon={locationIcon} className='icon' />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg="5" md="5" sm="5">
            <Button className="btn-block" theme="accent">
              DELIVERY
            </Button>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center or"
            lg="2"
            md="2"
            sm="2"
          >
            or
          </Col>
          <Col lg="5" md="5" sm="5">
            <Button className="btn-block" theme="accent">
              PICKUP
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default HeaderAddress;
