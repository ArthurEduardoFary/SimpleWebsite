import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react"
import Offcanvas from 'react-bootstrap/Offcanvas';

function MainNavbar() {
    //CREATE CLASS with variable 'navbar' set as default to false
    const [navbar, setNavbar] = useState(false)

    //CHANGE variable 'navbar' from above if condition
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
        }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
        })

  return (
    <>

    {/* backuphere */}
      <Navbar collapseOnSelect expand='sm' fixed='top' className={(navbar ? "navbar active" : "navbar navbar-dark")}>
          <Container>
            
            

            <Navbar.Brand href="#" ><h1  className='ms-5'>Nubas</h1> </Navbar.Brand>
            
            <Navbar.Toggle className='humburger me-5 custom-toggler' aria-controls="navbarHamburger" data-bs-toggle="collapse" data-bs-target="#navbarHamburger" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xs`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xs`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='me-5 justify-content-end'>
            
            <Nav class="navbar-nav" >
                <Nav.Link href='#' className='pe-3'>
                    Home
                </Nav.Link>
                <Nav.Link href='#' className='pe-3'>
                    Patchnotes
                </Nav.Link>
                <Nav.Link href='https://github.com/ArthurEduardoFary/SimpleWebsite' target='__blank' className='pe-3'>
                    Git-hub
                </Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/arthur-eduardo-fary-199346213/' target='__blank' className='pe-3 me-5'>
                    Linked-In
                </Nav.Link>
            </Nav>

            </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;