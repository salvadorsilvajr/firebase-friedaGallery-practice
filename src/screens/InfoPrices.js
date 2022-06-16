import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Message from "../components/Message";
import SocialMedia from "../components/SocialMedia";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const InfoPrices = () => {
    const [message, setMessage] = useState(null);
    const [name, setName] = useState("");
    const [pieceName, setPieceName] = useState("");
    const [comment, setComment] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const history = useHistory();

    let formatPhoneNumber = (str) => {
        //Filter only numbers from the input
        let cleaned = ("" + str).replace(/\D/g, "");

        //Check if the input is of correct length
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

        if (match) {
            return "(" + match[1] + ") " + match[2] + "-" + match[3];
        }

        return null;
    };
    const newfon = formatPhoneNumber(telefono);

    const sendNotification = async (e) => {
        e.preventDefault();

        setMessage("Thanks request info someone will contact you soon  ... !");
        const archivo = collection(db, "infoRequest");
        const payload = {
            // especialidad,
            pieceName: pieceName.toUpperCase(),
            name,
            comment,
            telefono: newfon,
            status: 1,
            email,
            timestamp: serverTimestamp(),
        };
        await addDoc(archivo, payload)
            .then(() => {
                console.log("Request Info send Ok...");
            })
            .catch((err) => {
                console.log("something when Wrong...");
                console.log(err);
            });
        // setEspecialidad("");
        setPieceName("");
        setName("");
        setComment("");
        setTelefono("");
        setEmail("");
        const myTimeout = setTimeout(getHome, 5000);

        function getHome() {
            clearTimeout(myTimeout);
            history.push("/");
        }
    };

    return (
        <>
            <SocialMedia />
            <Container>
                <Row className='justify-content-md-center text-center'>
                    {message && (
                        <Message setMessage={setMessage} variant='info'>
                            {message}
                        </Message>
                    )}

                    <Col xs={12} md={6}>
                        <h2>More Info About a Art piece</h2>
                        <Form onSubmit={sendNotification}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    id='name'
                                    type='text'
                                    required={true}
                                    placeholder='Your Full Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Piece you want more Info
                                </Form.Label>
                                <Form.Control
                                    id='pieceName'
                                    type='text'
                                    required={true}
                                    placeholder='Piece Name or Title'
                                    value={pieceName}
                                    onChange={(e) =>
                                        setPieceName(e.target.value)
                                    }
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Comments</Form.Label>
                                <Form.Control
                                    id='comment'
                                    as='textarea'
                                    required={true}
                                    placeholder='Any Comment you wanna add...'
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control
                                    id='email'
                                    type='email'
                                    required={true}
                                    placeholder='micorreo@gmail.com...'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    id='telefono'
                                    type='text'
                                    required={true}
                                    maxLength='10'
                                    placeholder='your phone number'
                                    // pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                    value={telefono}
                                    onChange={(e) => {
                                        setTelefono(e.target.value);
                                    }}
                                ></Form.Control>
                            </Form.Group>

                            <Button
                                style={{ width: "100%" }}
                                className='my-4'
                                type='submit'
                                // onClick={sendNotification}
                                variant='primary'
                            >
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InfoPrices;

// ***** irs backup code ************
//     IDME - UE3S - VILH - RSI3
// ****** irs backup code ************
