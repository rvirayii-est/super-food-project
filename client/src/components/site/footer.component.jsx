import React from 'react'
import { Container, Row, Col, } from 'shards-react';


const Footer = () => {
    return (
        <Container fluid className=''>
            <Row>
                <Col className="sub-footer" lg="3" xl="3" md="3" sm="3" xs="3">
                    <h4>FoodKart</h4>
                    <p className="footer-sub-content">Why starve when you have us</p>
                    <hr />
                    {/**change this to address*/}
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p className="footer-sub-content">Follow us on social media</p>
                    <button className="socialmedia-buttons">
                        <i className="fab fa-facebook ">
                        </i>
                    </button>
                    <button className="socialmedia-buttons">
                        <i className="fab fa-twitter ">
                        </i>
                    </button>
                    <button className="socialmedia-buttons">
                        <i className="fab fa-instagram ">
                        </i>
                    </button>
                    <button className="socialmedia-buttons">
                        <i className="fab fa-youtube ">
                        </i>
                    </button>
                    <button className="socialmedia-buttons">
                        <i className="fab fa-google ">
                        </i>
                    </button>
                </Col>
                <Col className="sub-footer" lg="5" xl="5" md="5" sm="5" xs="5">
                    <h4>Popular Cuisines</h4>
                    <ul className="cuisines">
                        <li>Burgers</li>
                        <li>Sandwiches</li>
                        <li>Pizza</li>
                        <li>Tacos</li>
                        <li>Milk Tea</li>
                        <li>Asian</li>
                        <li>Filipino</li>
                        <li>Desserts</li>
                        <li>American</li>
                        <li>Beverages</li>
                        <li>Cakes</li>
                        <li>Healthy</li>
                        <li>Korean</li>
                        <li>Mexican</li>
                        <li>Thai</li>
                        <li>Western</li>
                        <li>Sea Foods</li>
                        <li>Meats</li>
                        <li>Vegetarian</li>
                        <li>Chinese</li>
                    </ul>

                </Col>
            </Row>
            <Row>
                <Col className="bg-footer " lg="12" xl="12" md="12" sm="12" xs="12">
                    <h4 className="d-flex justify-content-center footer">&copy; FoodKart</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
