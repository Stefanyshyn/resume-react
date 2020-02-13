import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import UserModel from '../models/user-front';

const Example = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  let user = UserModel.getCurrentUser();

  return (
    <>
      {user?<Redirect to="/profile"></Redirect>:'' }
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Resume</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Stefanyshyn/resume-react.gitс">GitHub</NavLink>
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

export default Example;