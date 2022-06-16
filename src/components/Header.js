import React, { useContext } from "react";
import Menu from "./Menu";
import { auth } from "../firebase/firebaseConfig";
import { ContextTheme } from "../context/ContextTheme";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase/firebaseConfig";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, NavDropdown, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Logo from "../images/Frieda_logo-gris.png";
// import AlertMsg from "./components/AlertMsg";

const Header = ({ userRole }) => {
    const { user } = useContext(ContextTheme);

    // const { infoPrice } = useContext(ContextTheme);
    // const myinfoRequest = infoPrice.filter((r) => r.status === 1);

    // const [userRole, setUserRole] = useState(0);

    const history = useHistory();

    // const getrole = () => {
    //     const id = user.uid;
    //     const docRef = doc(db, "users", id);
    //     getDoc(docRef).then((doc) => {
    //         setUserRole(doc.data().userRol);
    //         // console.log(doc.data(), doc.data().userRol);
    //     });
    // };

    // if (user) {
    //     getrole();
    // }

    const logoutHandler = async () => {
        try {
            await auth.signOut();
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header>
            <Navbar expand='lg' className='fixed-top' bg='light'>
                <Container fluid>
                    <Navbar.Brand href='/'>
                        <Image
                            // style={{ height: "4em" }}
                            className='mylogo'
                            fluid
                            src={Logo}
                        ></Image>
                    </Navbar.Brand>
                    {!user && (
                        <Link to='/login' style={{ color: "#fff" }}>
                            {/* <Button> */}
                            <i className='fas fa-user'></i>
                            {/* </Button> */}
                        </Link>
                    )}
                    {user && (
                        <div style={{ display: "inline-flex" }}>
                            <Link
                                to='/addpictureprofile'
                                // props={{ user: user }}
                            >
                                <Image
                                    style={{ height: "3em" }}
                                    src={
                                        !user.photoURL
                                            ? "../images/profile.jpg"
                                            : user.photoURL
                                    }
                                    alt='Agrega to Foto'
                                ></Image>
                            </Link>
                            <NavDropdown title={user.displayName} id='username'>
                                {/* <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer> */}
                                {/* <LinkContainer to='/comentarios'>
                                    <NavDropdown.Item>
                                        Testimonios
                                    </NavDropdown.Item>
                                </LinkContainer> */}
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    )}
                    {user && userRole === 1 && (
                        <NavDropdown title='Admin' id='adminmenu'>
                            {/* <LinkContainer to='/admin/userlist'>
                                <NavDropdown.Item>Users</NavDropdown.Item>
                            </LinkContainer> */}
                            <LinkContainer to='/admin/Categorias'>
                                <NavDropdown.Item>Categorias</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/admin/Catalago'>
                                <NavDropdown.Item>Catalago</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    )}
                    <Menu />
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
