import React, { useState } from "react";
import { Offcanvas, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Menu = () => {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='menudiv' variant='primary' onClick={handleShow}>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <h5 className='menuh5'>menu</h5>
            </div>

            <Offcanvas
                styled={{ innerWidth: "300px" }}
                placement={"end"}
                show={show}
                onHide={handleClose}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Opciones</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='menuul'>
                        {/* <Menulink onClick={handleClose} to='Login'>
                            <Menuli>Login</Menuli>
                        </Menulink> */}
                        <li
                            className='menuil'
                            onClick={() => {
                                setShow(false);
                                history.push("/QuienesSomos");
                            }}
                        >
                            Bio
                        </li>
                        {/* <li
                            className='menuil'
                            onClick={() => {
                                setShow(false);
                                history.push("/Testimonios");
                            }}
                        >
                            Reviews
                        </li>
                        <li
                            className='menuil'
                            onClick={() => {
                                setShow(false);
                                history.push("/GaleriaFotos");
                            }}
                        >
                            Pictures
                        </li> */}
                        <li
                            className='menuil'
                            onClick={() => {
                                setShow(false);
                                history.push("/InfoPrices");
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Menu;
