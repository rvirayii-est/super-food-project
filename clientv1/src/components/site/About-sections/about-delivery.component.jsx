import React from 'react'
import { Container, Row, Col, Button, } from 'shards-react';


// svg
import { ReactComponent as ChefSVG } from '../../../assets/chef.svg';

const AboutUserComponent = () => {
    return (
        <Container fluid className=''>
            <Row>

                <Col className="section-two-main-content bg-accent pb-5" lg="12" xl="12" md="12" sm="12" xs="12">
                    <Row className='m-sm-5 m-md-3 h-100'>
                        <Col className='chef-container' lg="5" xl="5" md="5" sm="12" xs="12">
                            <ChefSVG className='' />
                        </Col>
                        <Col className='d-flex  align-items-center' lg="7" xl="7" md="7" sm="12" xs="12">
                            <div className='section-two-content mx-sm-3'>
                                <h1 className='section-two-heading'>Delivery</h1>
                                <p className='section-two-paragraphs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.</p>
                                <Button theme="accent" type="button" className="form-group xs_button">Be with us</Button>
                            </div>

                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUserComponent
