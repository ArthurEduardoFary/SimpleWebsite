
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react"
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useTranslation } from 'react-i18next';


function MainNavbar() {
    

    const { t, i18n } = useTranslation();

    const changeTranslationHandler = lng => {
      i18n.changeLanguage(lng)
    }

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

            <Navbar.Brand href="#" ><h1  className='ms-5 pt-2'>Arthur</h1> </Navbar.Brand>
            
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
                <Nav.Link href='https://github.com/ArthurEduardoFary/SimpleWebsite' target='__blank' className='pe-3'>
                    Git-hub
                </Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/arthur-eduardo-fary-199346213/' target='__blank' className='pe-3'>
                    Linked-In
                </Nav.Link>
                <NavDropdown title={t('contactme')} id='nav-dropdown' className='pe-3'> 
                  <NavDropdown.Item href={'http://wa.me/5547996762167?text=' + t('whatsapp')} target='__blank'>
                    Whatsapp
                  </NavDropdown.Item>
                  <NavDropdown.Item href='mailto:arthur.e.fary@gmail.com'>
                    E-mail
                  </NavDropdown.Item>
                  <NavDropdown.Item href='https://www.instagram.com/arthurfary/' target='__blank'>
                    Instagram
                  </NavDropdown.Item>
              
                </NavDropdown>
                
                <Col >
                  <NavDropdown title={t('lang')} id='nav-dropdown' className='pe-5 '> 
                          <NavDropdown.Item onClick={() => {changeTranslationHandler('en')}}>
                            English
                          </NavDropdown.Item>
                          <NavDropdown.Item onClick={() => {changeTranslationHandler('pt')}}>
                            Português
                          </NavDropdown.Item>
                  </NavDropdown>
                </Col>
            </Nav>
            

            </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          
      </Navbar>
    </>
  );
}


export default MainNavbar
