import React from 'react'
import { Container, Row, Col, Form, FormInput, Button } from 'shards-react';


const Subscribe = () => {
    return (
        <Container fluid className=''>
            <Row>
                <Col className="bg-accent space-bottom-5" lg="12" xl="12" md="12" sm="12" xs="12">
                    <h1 className="d-flex justify-content-center subscribe-main-heading">Stay in touch</h1>
                    <h6 className="d-flex justify-content-center subscribe-sub-heading">Subscribe to our newsletter so we can send you offers and discounts!</h6>

                    <Form>
                        <Row form>
                            {/* First Name */}
                            <Col md="3"></Col>
                            <Col md="6" className="form-group ">
                                <FormInput
                                    type="email"
                                    id="feEmail"
                                    className="subscribe-input-height-10 subscribe-input-position-center"
                                    placeholder="Email Address"
                                    onChange={() => { }}
                                    autoComplete="email"
                                />
                            </Col>
                            <Col md="3">
                                <Button theme="accent" type="button" className="form-group">SUBSCRIBE</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}

export default Subscribe
