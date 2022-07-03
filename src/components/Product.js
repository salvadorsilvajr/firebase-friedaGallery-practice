import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

// import Rating from "./Rating";

const Product = ({ product }) => {
    // const [mostra, setMostrar] = useState(false);

    const displayTitle = () => {
        const parrafo = document.getElementById(`${product.id}`);
        parrafo.classList.toggle("display");
    };
    const displayTitlenot = () => {
        const parrafo = document.getElementById(`${product.id}`);
        parrafo.classList.toggle("display");
    };

    return (
        <Col sm={12} md={4}>
            <Card className='prodectCard'>
                <Link to={`/product/${product.id}`}>
                    <Card.Img
                        // style={{ maxHeight: "14em" }}
                        onMouseOver={displayTitle}
                        onMouseLeave={displayTitlenot}
                        className='productImage'
                        src={product.url}
                        // variant='top'
                    />
                    {/* <p className='titleparrafo'>{product.title}</p> */}
                </Link>
                <Card.Body className='productcardbody'>
                    <Link to={`/product/${product.id}`}>
                        <Card.Title>
                            <p id={product.id} className='titleparrafo display'>
                                {product.title}
                            </p>
                        </Card.Title>
                    </Link>
                    {/* <Card.Text as='div'>
                        <Rating
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                        />
                    </Card.Text>
                    <Card.Text as='h5'>{product.duracion} dls</Card.Text> */}
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
