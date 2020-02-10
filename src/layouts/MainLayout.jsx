import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';

function handleLogout(){}

const MainLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Resume</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </NavItem>
            <NavItem >
              <Link to="/main" className="nav-link" onClick={handleLogout}>
                Log out
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container>
        {children}
      </Container>
      <footer color="blue" className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="mailto: ivanstefanushun@gmail.com"> Ivan Stefanyshyn </a>
          </Container>
        </div>
      </footer>

    </>
  );
}

export default MainLayout;