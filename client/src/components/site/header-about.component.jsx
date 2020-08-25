import React from "react";

import { Row, Col, Container } from "shards-react";

// image
import headerHeroImage from "../../assets/header-hero.webp";
//import HeaderAddress from "./header-address.component";

const HeaderHero = () => {
    return (
        <Container fluid className="header-hero">
            <Row className="row-full-height">
                <Col className="heading" lg="6" xl="6" md="6" sm="11" xs="11">
                    <h1 className="mb-5">Who We Are</h1>
                    <h3 className="mb-4 ml-1">Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make
                    a type specimen book.</h3>

                </Col>

                <Col className="img-container p-0" xl="6" lg="6" md="6" sm="1" xs="1">
                    <img className="mt-3" alt="Foods" src={headerHeroImage} />
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderHero;
