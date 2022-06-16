import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = () => {
    return (
        <section className='redes-sociales'>
            <div className='contenedor'>
                <Link
                    className='facebook'
                    to={{
                        pathname:
                            "https://www.facebook.com/FriedaGallerycom-103022469052678",
                    }}
                    target='_blank'
                >
                    <i className='fab fa-facebook-square'></i>
                </Link>
                {/* <Link className='twitter' to='#!'>
                    <i className='fab fa-twitter-square'></i>
                </Link> */}

                {/* <Link className='messenger' to='#!'>
                    <i className='fab fa-facebook-messenger'></i>
                </Link>
                <Link className='whatsapp' to='#'>
                    <i className='fab fa-whatsapp-square'></i>
                </Link> */}
                <Link
                    className='instagram'
                    to={{
                        pathname:
                            "https://www.instagram.com/friedagallery.com2/",
                    }}
                    target='_blank'
                >
                    <i className='fab fa-instagram-square'></i>
                </Link>
                <Link className='linkedln' to='#'>
                    <i className='fab fa-linkedin'></i>
                </Link>
            </div>
        </section>
    );
};

export default SocialMedia;
