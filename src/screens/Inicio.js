import React from "react";
import { Container } from "react-bootstrap";
// import SocialMedia from "../components/SocialMedia";

import CatalagoDisplay from "../components/CatalagoDisplay";

const Inicio = () => {
    return (
        <main className='text-center'>
            {/* <SocialMedia /> */}
            <Container>
                <CatalagoDisplay />
            </Container>
        </main>
    );
};

export default Inicio;
