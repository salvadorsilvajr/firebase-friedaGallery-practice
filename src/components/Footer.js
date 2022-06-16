import React from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";

import { Row } from "react-bootstrap";

const Footer = () => {
    // const history = useHistory();
    return (
        <Footerfo>
            {/* <Row className='mx-0'>
                <Button
                    as={Col}
                    variant='primary'
                    onClick={() => {
                        history.push("/Testimonios");
                    }}
                >
                    <i className='fas fa-user'></i>
                    <Footerspan> Reviews</Footerspan>
                </Button>

                <Button
                    as={Col}
                    variant='primary'
                    className='mx-2'
                    onClick={() => {
                        history.push("/InfoPrices");
                    }}
                >
                    <i className='fas fa-money-check-alt'></i>
                    <Footerspan> Info & Prices </Footerspan>
                </Button>

                <Button
                    as={Col}
                    variant='primary'
                    onClick={() => {
                        history.push("/GaleriaFotos");
                    }}
                >
                    <i className='fas fa-light fa-images'></i>
                    <Footerspan> Pictures</Footerspan>
                </Button>
            </Row> */}
            <Row>
                <Footerp>
                    &copy;{new Date().getFullYear()} Frieda's Silva Gallery |
                    All Right Reserved | Privacy
                </Footerp>
            </Row>
        </Footerfo>
    );
};

const Footerfo = styled.footer`
    padding: 2em 0.5em;

    text-align: center;
`;

const Footerp = styled.p`
    padding-top: 1em;
`;

// const Footerspan = styled.span`
//     color: white;
//     @media (max-width: white) {
//         display: none;
//     }
// `;

export default Footer;
