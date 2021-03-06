import React,{ useState,useEffect }  from 'react'
import {Navbar,Container,Nav,NavDropdown,Button,Modal } from 'react-bootstrap';
import {FaPhoneAlt,FaRegUserCircle} from 'react-icons/fa'
import {BiTime,BiMap} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { useHistory } from 'react-router';
export default function Header() {
    const [show, setShow] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [isLogined, setIsLogined] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const history = useHistory();
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOut = () => {
        localStorage.clear()
        window.location.reload(false);
    };
    useEffect(() => {
        checkLogin();
    });


    function checkLogin() {
        if (localStorage.getItem("access_token") != null) {
            setIsLogined(true);
            setUser(JSON.parse(localStorage.getItem("user")))
        }

    }
    if (isLogined){
        return (
            <>
                <style type="text/css"> 
                    {`
                    .btn-flat {
                    background-color: purple;
                    color: white;
                    }
    
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
              <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand >
                        <Link to="/">
                        <img
                        alt=""
                        src="https://res.ivivu.com/hotel/img/logo.svg"
                        width="100%"
                        height="100%"
                        className="d-inline-block align-top"
                        />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to="/search/q= ">Kh??ch S???n</Link></Nav.Link>
                            <Nav.Link >Tour</Nav.Link>
                            <Nav.Link >V?? M??y Bay</Nav.Link>
                            <Nav.Link >??n U???ng</Nav.Link>
                            <NavDropdown title="..." id="basic-nav-dropdown">
                                <NavDropdown.Item >T??i Kho???n ?????t Ph??ng</NavDropdown.Item>
                                <NavDropdown.Item >C???m nang du l???ch</NavDropdown.Item>
                                <NavDropdown.Item >Gi???i thi???u</NavDropdown.Item>
                                <NavDropdown.Item >H???i ????p</NavDropdown.Item>
                                <NavDropdown.Item >H??? tr???</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <FaRegUserCircle />
                            <NavDropdown title={user.email} id="basic-nav-dropdown">
                                <NavDropdown.Item ><Button onClick={handleOut} >????ng xu???t</Button></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="hotline">
                                <p className="hotline__phone" >
                                    <FaPhoneAlt/>1900 2045
                                </p>
                                <Nav className="hotline__item">
                                    <BiTime /><span> 7h </span><BsArrowRight/> <span> 12h </span> <BiMap/>
                                    <NavDropdown  title="H??? Ch?? Minh" className="hotline__item--select" id="basic-nav-dropdown">
                                    <NavDropdown.Item  onClick={handleOut}>????ng xu???t</NavDropdown.Item>
                                    <NavDropdown.Item >
                                    </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                
                          
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
              </Navbar>  
            </>
        )
    }
    else{
        return (
            <>
                <style type="text/css"> 
                    {`
                    .btn-flat {
                    background-color: purple;
                    color: white;
                    }
    
                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
                </style>
              <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand >
                        <Link to="/">
                        <img
                        alt=""
                        src="https://res.ivivu.com/hotel/img/logo.svg"
                        width="100%"
                        height="100%"
                        className="d-inline-block align-top"
                        />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to="/search/q= ">Kh??ch S???n</Link></Nav.Link>
                            <Nav.Link >Tour</Nav.Link>
                            <Nav.Link >V?? M??y Bay</Nav.Link>
                            <Nav.Link >??n U???ng</Nav.Link>
                            <NavDropdown title="..." id="basic-nav-dropdown">
                                <NavDropdown.Item >T??i Kho???n ?????t Ph??ng</NavDropdown.Item>
                                <NavDropdown.Item >C???m nang du l???ch</NavDropdown.Item>
                                <NavDropdown.Item >Gi???i thi???u</NavDropdown.Item>
                                <NavDropdown.Item >H???i ????p</NavDropdown.Item>
                                <NavDropdown.Item >H??? tr???</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <FaRegUserCircle />
                            <NavDropdown title="T??i kho???n" id="basic-nav-dropdown">
                                <NavDropdown.Item ><Button onClick={handleShow} >????ng nh???p</Button></NavDropdown.Item>
                                <NavDropdown.Item onClick={handleShowSignUp}>N???u ch??a c?? t??i kho???n <span>????ng k??</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="hotline">
                                <p className="hotline__phone" >
                                    <FaPhoneAlt/>1900 2045
                                </p>
                                <Nav className="hotline__item">
                                    <BiTime /><span> 7h </span><BsArrowRight/> <span> 12h </span> <BiMap/>
                                    <NavDropdown  title="H??? Ch?? Minh" className="hotline__item--select" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={handleShow}>????ng nh???p</NavDropdown.Item>
                                    <NavDropdown.Item >
                                    </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                
                          
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>????ng Nh???p</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <LoginForm />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            ????ng
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={showSignUp} onHide={handleCloseSignUp}>
                        <Modal.Header closeButton>
                        <Modal.Title>????ng K??</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <SignUpForm />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSignUp}>
                            ????ng
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
              </Navbar>  
            </>
        )
    }
    
}
