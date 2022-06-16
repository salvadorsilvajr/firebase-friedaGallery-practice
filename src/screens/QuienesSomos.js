import React from "react";
import { Container } from "react-bootstrap";
import quiensomos from "../data/quiensomos";
import InfoSomos from "../components/InfoSomos";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            <Container>
                <h2 className='p-3'>About Frieda</h2>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {quiensomos.map((product) => {
                        return <InfoSomos key={product.id} product={product} />;
                    })}
                </div>
                {/* <h4 className='p-3 text-center'>
                Experiencia en impartición de cursos desde: 1999-2022
            </h4> */}
            </Container>
        </>
    );
};

export default QuienesSomos;
