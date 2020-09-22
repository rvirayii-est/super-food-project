import React from 'react'
import { Container, Row, Col } from 'shards-react';


const Download = () => {
    return (
        <Container fluid className=''>
            <Row className="space-bottom-5 download-container-fluid">
                <Col lg="12" xl="12" md="12" sm="12" xs="12">
                    <h3 className="download-container-fluid-h3">Download the food app you love.</h3>
                    <p>Food app in your pocket. Find the best food to suit your cravings. Go ahead, download now.</p>



                    <button className="btn_border xs_button">
                        <i className="fab fa-apple"></i>
                        <span className="btn__text"> Download on the <b>App Store</b></span>
                    </button>

                    <button className="btn_border xs_button">
                        <i className="fab fa-google-play"></i>
                        <span className="btn__text"> Download on the <b>Play Store</b></span>
                    </button>

                    {/* <div className="flex social-btns">
                        <button className="app-btn blu flex vert" href="http:apple.com">
                            <i class="fab fa-apple"></i>
                            <p className="space-top-5">Available on the <br /> <span class="big-txt">App Store</span></p>
                        </button>

                        <button className="app-btn blu flex vert" href="http:apple.com">
                            <i class="fab fa-google-play"></i>
                            <p className="space-top-5">Available on the <br /> <span class="big-txt">Google Play</span></p>
                        </button>
                    </div> */}
                </Col>

            </Row>
        </Container >
    )
}

export default Download
