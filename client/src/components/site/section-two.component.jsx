import React from 'react'
import { Container, Row, Col } from 'shards-react';

// components
import Offers from './offers.component';

// svg
import { ReactComponent as ChefSVG } from '../../assets/chef.svg';

const LandingSectionTwo = () => {
  return (
    <Container fluid className='section-two'>
      <Row>
        <Col className="bg-accent" lg="12" xl="12" md="12" sm="12" xs="12">
          <Offers />
        </Col>
        <Col className="section-two-main-content bg-accent" lg="12" xl="12" md="12" sm="12" xs="12">
          <Row className='m-sm-5 m-md-3 h-100'>
            <Col className='chef-container'  lg="5" xl="5" md="5" sm="12" xs="12">
            <ChefSVG className='' />
            </Col>
            <Col className='d-flex  align-items-center' lg="7" xl="7" md="7" sm="12" xs="12">
              <div className='section-two-content mx-sm-3'>
                <h1 className='section-two-heading'>Be With Us</h1>
                <h3 className='section-two-subheading mb-2'>List your restaurant on our FoodKart</h3>
                <p className='section-two-paragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt id diam non consectetur. Quisque pretium est sed sapien ultricies.</p>
                <p className='section-two-paragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt id diam non consectetur. Quisque pretium est sed sapien ultricies.</p>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingSectionTwo
