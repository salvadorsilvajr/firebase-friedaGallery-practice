import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const AlertMsg = ({ infoRequest }) => {
    const [show, setShow] = useState(true);
    // const [showA, setShowA] = useState(true);
    return (
        <>
            <ToastContainer position='top-end' className='alert-fixed '>
                {infoRequest.map((inforeq, ind) => (
                    <Toast
                        key={inforeq.id}
                        bg='info'
                        onClose={() => setShow(false)}
                        show={show}
                    >
                        <Toast.Header>
                            <i className='fas fa-info-circle mx-2'> </i>
                            <strong className='me-auto'>
                                {" "}
                                {inforeq.pieceName}{" "}
                            </strong>
                            <small className='text-muted'>{inforeq.name}</small>
                        </Toast.Header>
                        <Toast.Body style={{ color: "gold" }}>
                            <strong className='me-auto'>{inforeq.email}</strong>
                            <p>
                                <strong className='me-auto'>
                                    {inforeq.telefono}
                                </strong>
                            </p>
                            {inforeq.comment}
                        </Toast.Body>
                    </Toast>
                ))}
                {/* <Toast bg='info' onClose={() => setShow(false)} show={show}>
                    <Toast.Header>
                        <i className='fas fa-info-circle mx-2'> </i>
                        <strong className='me-auto'> Resquest Info</strong>
                        <small className='text-muted'>just now</small>
                    </Toast.Header>
                    <Toast.Body style={{ color: "gold" }}>
                        See? Just like this.
                    </Toast.Body>
                </Toast>
                <Toast bg='info' onClose={() => setShowA(false)} show={showA}>
                    <Toast.Header>
                        <i className='fas fa-info-circle mx-2'> </i>
                        <strong className='me-auto'> Resquest Info</strong>
                        <small className='text-muted'>just now</small>
                    </Toast.Header>
                    <Toast.Body style={{ color: "gold" }}>
                        See? Just like this.
                    </Toast.Body>
                </Toast> */}
            </ToastContainer>
        </>
    );
};

export default AlertMsg;
