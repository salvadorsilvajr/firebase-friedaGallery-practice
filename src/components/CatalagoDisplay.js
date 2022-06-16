import React, { useContext } from "react";
import { ContextTheme } from "../context/ContextTheme";
import { Container, Row } from "react-bootstrap";
import Product from "../components/Product";

const CatalagoDisplay = () => {
    const { categorias } = useContext(ContextTheme);
    const { catalago } = useContext(ContextTheme);

    return (
        <Container>
            <h2>Frieda's Gallery</h2>
            {categorias.map((cat) => (
                <Row key={cat.id}>
                    <hr />
                    <h2 className='titlecategoria'>{cat.categoria}</h2>
                    <Row>
                        {catalago.map((product) => {
                            if (product.categoria === cat.categoria) {
                                return (
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
                                );
                            } else {
                                return "";
                            }
                        })}
                    </Row>
                </Row>
            ))}
        </Container>
    );
};

export default CatalagoDisplay;
