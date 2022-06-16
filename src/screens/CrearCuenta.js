import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
// import styled from "styled-components";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import ProfilePic from "../images/imagehere.png";
import Message from "../components/Message";
import { Container, Form, Col, Row, Button, Image } from "react-bootstrap";
import { ContextTheme } from "../context/ContextTheme";

const CrearCuenta = ({ location }) => {
    const { categorias } = useContext(ContextTheme);

    // const [especialidad, setEspecialidad] = useState("");
    const [categoria, setCategoria] = useState("");
    const [price, setPrice] = useState(100.0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [preview, setPreview] = useState("");
    const [progress, setProgress] = useState(0);
    const [urlImage, setUrlImage] = useState("../images/imagehere.png");
    const [file, setFile] = useState("");
    const [message, setMessage] = useState(null);

    const myPic = useRef();

    // const redirect = location.search ? location.search.split("=")[1] : "/";

    const submitHandler = async (e) => {
        e.preventDefault();
        setMessage("creando cuenta ... !");
        const archivo = collection(db, "catalago");
        const payload = {
            // especialidad,
            categoria: categoria.toUpperCase(),
            price,
            title,
            description,
            url: urlImage,
            rating: 0,
            numReviews: 0,
            timestamp: serverTimestamp(),
        };
        await addDoc(archivo, payload)
            .then(() => {
                console.log("New Vendor added it correclty...");
            })
            .catch((err) => {
                console.log("something when Wrong...");
                console.log(err);
            });
        // setEspecialidad("");
        setCategoria("");
        setPrice(1);
        setTitle("");
        setDescription("");
        setUrlImage("");
        setCategoria("");
        setPreview("");
        setProgress(0);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const metadata = {
            contenType: "image/*",
        };
        const storageRef = ref(storage, `galleryImages/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        break;

                    // ...

                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrlImage(downloadURL);
                });
            }
        );
    };

    return (
        <Container>
            <Row className='justify-content-md-center text-center'>
                <Col xs={12} md={12} xl={8}>
                    <h2 className='my-3 titlecategoria'>Add new Art Piece</h2>
                    <Link className='btn btn-light my-3' to='/admin/Catalago'>
                        Go Back
                    </Link>
                    {message && (
                        <Message setMessage={setMessage} variant='warning'>
                            {message}
                        </Message>
                    )}
                    <Form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label>
                                {preview ? (
                                    <Image
                                        fluid
                                        // className='myfoto'
                                        style={{
                                            borderRadius: "30px",
                                            maxHeight: "7em",
                                            objectFit: "cover",
                                        }}
                                        onClick={() => {
                                            setFile(null);
                                        }}
                                        src={preview}
                                    />
                                ) : (
                                    <Button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            myPic.current.click();
                                        }}
                                        // id='propic'
                                    >
                                        <Image
                                            style={{
                                                maxHeight: "7em",
                                                objectFit: "cover",
                                            }}
                                            fluid
                                            src={ProfilePic}
                                            alt=''
                                        />
                                    </Button>
                                )}
                            </Form.Label>
                            <Form.Control
                                ref={myPic}
                                accept='image/*'
                                style={{ display: "none" }}
                                type='file'
                                id='file'
                                name='file'
                                onChange={(event) => {
                                    const file = event.target.files[0];

                                    if (
                                        file &&
                                        file.type.substr(0, 5) === "image"
                                    ) {
                                        setFile(file);
                                    } else {
                                        setFile(null);
                                    }
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            const Base64 = reader.result;
                                            setPreview(Base64);
                                        };
                                        reader.readAsDataURL(file);
                                    } else {
                                        setPreview(null);
                                    }
                                }}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <progress value={progress} max='100' />
                        </Form.Group>
                        <Button onClick={(e) => handleUpload(e)} variant='info'>
                            Add Picture
                        </Button>

                        <Form.Group>
                            <Row style={{ padding: "2em 0" }}>
                                <Col>
                                    <Form.Label htmlFor='categoria'>
                                        Category
                                    </Form.Label>
                                    <Form.Select
                                        required
                                        value={categoria}
                                        onChange={(e) =>
                                            setCategoria(e.target.value)
                                        }
                                        id='categoria'
                                    >
                                        <option> Select One</option>
                                        {categorias.map((cat) => (
                                            <option
                                                key={cat.id}
                                                value={cat.categorias}
                                            >
                                                {cat.categoria}
                                            </option>
                                        ))}
                                        Categorias
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Form.Label htmlFor='price'>
                                        Price
                                    </Form.Label>
                                    <Form.Control
                                        type='number'
                                        placeholder='Price'
                                        value={price}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    ></Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group controlId='title'>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Name or Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        {/* <Form.Group controlId='dirigido'>
                            <Form.Label>Curso Dirigido a</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Curso Dirigido a:'
                                value={dirigido}
                                onChange={(e) => setDirigido(e.target.value)}
                            ></Form.Control>
                        </Form.Group> */}

                        <Form.Group controlId='description'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                style={{ height: "150px" }}
                                as='textarea'
                                type='text'
                                placeholder='Describe sizes and info about this piece'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Button
                            style={{ width: "100%" }}
                            className='my-4'
                            type='submit'
                            variant='primary'
                        >
                            Enviar
                        </Button>
                    </Form>
                    <Row>
                        {/* <Col className={show}>
                            <Button onClick={SignInGoogleHandle}>
                                Sign in With Google
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick={SignInFacebookHandle}>
                                Sign in With Facebook
                            </Button>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default CrearCuenta;
