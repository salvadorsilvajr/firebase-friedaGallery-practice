import React, { useContext } from "react";
import { ContextTheme } from "../context/ContextTheme";
import { Container, Row } from "react-bootstrap";
import Galeria from "../components/Galeria";

const GaleriaFotos = () => {
    const { fotos } = useContext(ContextTheme);

    return (
        <Container>
            <h2>Pictures Share by Customers</h2>
            <Row style={{ justifyContent: "space-evenly" }}>
                {fotos.map((product) => {
                    return <Galeria key={product.id} product={product} />;
                })}
            </Row>
        </Container>
    );
};

export default GaleriaFotos;
