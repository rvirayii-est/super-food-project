import React from 'react'
import { Container, Row, Col, Button, } from 'shards-react';


// svg
import { ReactComponent as ChefSVG } from '../../../assets/chef.svg';

const AboutUserComponent = () => {
    return (
        <Container fluid className='section-two'>
            <Row>

                <Col className="section-two-main-content bg-accent pb-5" lg="12" xl="12" md="12" sm="12" xs="12">
                    <Row className='m-sm-5 m-md-3 h-100'>
                        <Col className='chef-container' lg="5" xl="5" md="5" sm="12" xs="12">
                            <ChefSVG className='' />
                        </Col>
                        <Col className='d-flex  align-items-center' lg="7" xl="7" md="7" sm="12" xs="12">
                            <div className='section-two-content mx-sm-3'>
                                <h1 className='section-two-heading'>Customers</h1>
                                <p className='section-two-paragraphs'>With your favorite restaurants at your fingertips,
                                DoorDash satisfies your cravings and connects you with possibilities — more time and energy for
                                yourself and those you love.</p>
                                <Button theme="accent" type="button" className="form-group xs_button">Start an order</Button>
                            </div>

                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUserComponent
