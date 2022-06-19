import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextTheme } from "../context/ContextTheme";
// import { useDispatch, useSelector } from "react-redux";
import {
    Row,
    Col,
    Image,
    ListGroup,
    // Card,
    // Button,
    // Form,
} from "react-bootstrap";
// import { db } from "../../src/firebase/firebaseConfig";
import // collection,
// addDoc,
// doc,
// updateDoc,
// deleteDoc,
// serverTimestamp,
"firebase/firestore";
// import catalago from "../data/catalago";
// import reviews from "../data/reviews";
import { useAuth } from "../context/ContextTheme";
// import Rating from "../components/Rating";
import Message from "../components/Message";
// import MensajeFijo from "../components/MensajeFijo";
// import AddPicturesGallery from "../components/AddPicturesGallery";
// import reviews from "../data/reviews";
// import reviews from "../data/reviews";
// import Loader from "../components/Loader";
// import Meta from "../components/Meta";
// import {
//   listProductDetails,
//   createProductReview,
// } from '../actions/productActioins'
// import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'

const ProductScreen = ({ history, match }) => {
    const { catalago } = useContext(ContextTheme);
    // const { reviews } = useContext(ContextTheme);
    // const { user } = useContext(ContextTheme);
    // const [urls, setUrls] = useState("");
    // const [rating, setRating] = useState(0);
    // const [comment, setComment] = useState("");
    const [message, setMessage] = useState(null);
    // const [yacomente, setYacomente] = useState(false);

    const { user } = useAuth();
    console.log(user);

    const productId = match.params.id;

    const product = catalago.find((x) => x.id.toString() === productId);

    // const myReviews = reviews.filter((r) => r.cursoId === product.id);
    // console.log(myReviews, productId);
    // const addpicturestogalleria = () => {
    //     const archivo = collection(db, "fotosgaleria");
    //     urls.map(async (url) => {
    //         const payload = {
    //             userId: user.auth.currentUser.uid,
    //             cursoId: product.id,
    //             name: user.auth.currentUser.displayName,
    //             images: url,
    //             timestamp: serverTimestamp(),
    //         };

    //         await addDoc(archivo, payload)
    //             .then(() => {
    //                 setMessage("Nuevo Comentario y calificacion agregados...");
    //             })
    //             .catch((err) => {
    //                 console.log("something when Wrong...");
    //                 console.log(err);
    //             });
    //     });
    // };

    // useEffect(() => {
    //     user &&
    //         myReviews &&
    //         myReviews.map((review) => {
    //             review.userId === user.auth.currentUser.uid &&
    //                 setYacomente(true);
    //         });
    // }, [myReviews, user]);

    // console.log(yacomente);
    // const updateproductRating = async () => {
    //     const docRef = doc(db, "catalago", productId);

    //     const prodPayload = {
    //         numReviews: myReviews.length,
    //         rating:
    //             myReviews.reduce((acc, item) => item.rating + acc, 0) /
    //             myReviews.length,
    //     };
    //     await updateDoc(docRef, prodPayload)
    //         .then(() => {
    //             console.log("calificaion calculada correctamente ...");
    //         })
    //         .catch((err) => {
    //             setMessage("Algo salio mal ...", err);
    //         });
    //     // setReviewstoday([]);
    // };

    // updateproductRating();

    // const borrarComentario = async ({ id }) => {
    //     setMessage("Borrando tu Comentario y Calificacion");
    //     const docRef = doc(db, "reviews", id);
    //     await deleteDoc(docRef);
    // };

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     const alreadyReviewed = reviews.find(
    //         (r) => r.userId === user.auth.currentUser.uid
    //     );

    //     if (alreadyReviewed) {
    //         // res.status(400);
    //         setMessage("Ya calificaste este curso anteriormente ...");
    //     } else {
    //         const archivo = collection(db, "reviews");
    //         const payload = {
    //             userId: user.auth.currentUser.uid,
    //             cursoId: product.id,
    //             name: user.auth.currentUser.displayName,
    //             rating: Number(rating),
    //             comment,
    //             userImage: user.auth.currentUser.photoURL,
    //             timestamp: serverTimestamp(),
    //         };

    //         await addDoc(archivo, payload)
    //             .then(() => {
    //                 setMessage("Nuevo Comentario y calificacion agregados...");
    //             })
    //             .catch((err) => {
    //                 console.log("something when Wrong...");
    //                 console.log(err);
    //             });
    //         addpicturestogalleria();
    //         updateproductRating();
    //         setComment("");
    //         setRating(0);
    //         setUrls("");
    //         setMessage(null);
    //    }
    // };

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {message && <Message setMessage={setMessage} />}
            <Row style={{ justifyContent: "center" }}>
                <Col
                    md={6}
                    sm={12}
                    style={{ display: "flex", width: "max-content" }}
                >
                    <Image
                        className='productscreenImage'
                        // style={{ maxHeight: "35em" }}
                        src={product.url}
                        alt={product.name}
                        fluid
                    />
                </Col>
                <Col md={6} sm={12}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{product.categoria.toLowerCase()}</h2>
                            {/* <h5>{product.especialidad}</h5> */}
                        </ListGroup.Item>
                        {/* <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={` ${product.numReviews} reviews`}
                            />
                        </ListGroup.Item> */}
                        <ListGroup.Item>
                            <b>Title :</b> {product.title}
                        </ListGroup.Item>
                        <ListGroup.Item className='productsreenItem'>
                            <b>Descripción:</b> {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            {/* <Row style={{ justifyContent: "center" }}>
                <Col md={9}>
                    {myReviews.length === 0 ? (
                        // console.log("No Hay Comentarios")
                        <MensajeFijo variant='primary'>
                            <h2>No Revies yet...</h2>
                        </MensajeFijo>
                    ) : (
                        <h2>Rates & Reviews</h2>
                    )}
                    {message && (
                        <Message variant='warning' setMessage={setMessage}>
                            <h2>{message} </h2>
                        </Message>
                    )}

                    <ListGroup variant='flush'>
                        {user === null
                            ? myReviews.map((review) => {
                                  return (
                                      <ListGroup.Item key={review.id}>
                                          <Image
                                              style={{
                                                  width: "2.7em",
                                              }}
                                              src={review.userImage}
                                              alt={review.name}
                                              fluid
                                          />
                                          <strong
                                              style={{ marginLeft: "20px" }}
                                          >
                                              {review.name}
                                          </strong>
                                          <Rating value={review.rating} />
                                          <p>{review.comment}</p>
                                      </ListGroup.Item>
                                  );
                              })
                            : myReviews.map((review) =>
                                  review.userId ===
                                  user.auth.currentUser.uid ? (
                                      <ListGroup.Item key={review.id}>
                                          <Image
                                              style={{
                                                  width: "2.7em",
                                              }}
                                              src={review.userImage}
                                              alt={review.name}
                                              fluid
                                          />
                                          <strong
                                              style={{ marginLeft: "20px" }}
                                          >
                                              {review.name}
                                          </strong>
                                          <Rating value={review.rating} />
                                          <p>{review.comment}</p>
                                          <Button
                                              onClick={() =>
                                                  borrarComentario({
                                                      id: review.id,
                                                  })
                                              }
                                              variant='danger'
                                          >
                                              <i className='far fa-trash-alt'></i>
                                          </Button>
                                      </ListGroup.Item>
                                  ) : (
                                      <ListGroup.Item key={review.id}>
                                          <Image
                                              style={{
                                                  width: "2.7em",
                                              }}
                                              src={review.userImage}
                                              alt={review.name}
                                              fluid
                                          />
                                          <strong
                                              style={{ marginLeft: "20px" }}
                                          >
                                              {review.name}
                                          </strong>
                                          <Rating value={review.rating} />
                                          <p>{review.comment}</p>
                                      </ListGroup.Item>
                                  )
                              )}
                        <ListGroup.Item>
                            {user && !yacomente ? (
                                <>
                                    <AddPicturesGallery setUrls={setUrls} />
                                    <hr />
                                    <h2>Share your Comments...</h2>
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId='rating'>
                                            <Form.Label>Rate</Form.Label>
                                            <Form.Control
                                                as='select'
                                                value={rating}
                                                onChange={(e) =>
                                                    setRating(e.target.value)
                                                }
                                            >
                                                <option value=''>
                                                    Select...
                                                </option>
                                                <option value={1}>
                                                    1 - Mala
                                                </option>
                                                <option value={2}>
                                                    2 - Regular
                                                </option>
                                                <option value={3}>
                                                    3 - Buena
                                                </option>
                                                <option value={4}>
                                                    4 - Muy Buena
                                                </option>
                                                <option value={5}>
                                                    5 - Excellente
                                                </option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId='comment'>
                                            <Form.Label>Comments</Form.Label>
                                            <Form.Control
                                                as='textarea'
                                                row='3'
                                                value={comment}
                                                onChange={(e) =>
                                                    setComment(e.target.value)
                                                }
                                            ></Form.Control>
                                        </Form.Group>
                                        <Button
                                            // disabled={loadingProductReview}
                                            type='submit'
                                            variant='primary'
                                        >
                                            Enviar
                                        </Button>
                                    </Form>
                                </>
                            ) : !user ? (
                                <MensajeFijo
                                    variant='success'
                                    setMessage={setMessage}
                                >
                                    Please{" "}
                                    <Link className='text-primary' to='/login'>
                                        sign in
                                    </Link>{" "}
                                    to Add a Review or comment{" "}
                                </MensajeFijo>
                            ) : (
                                <MensajeFijo
                                    variant='success'
                                    setMessage={setMessage}
                                >
                                    You already Review this piece
                                </MensajeFijo>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row> */}
        </>
    );
};

export default ProductScreen;
