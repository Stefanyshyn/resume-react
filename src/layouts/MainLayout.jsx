import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import UserModel from '../models/user-front';


const MainLayout = ({children, history}) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  let user = !!(UserModel.getCurrentUser());
  const handleLogout = (e)=>{
    UserModel.logout();
    history.replace('/sign-in')
  }

  return (
    <>
      {user?'':<Redirect to='/sign-in'></Redirect>}
      <Navbar color="dark" dark expand="md">
        <Link to='/feed-resume'>
          <NavbarBrand href="/">Resume</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/create-resume" className="nav-link">
                Create resume
              </Link>
            </NavItem>
            <NavItem >
              <Link to="/sign-in" className="nav-link" onClick={handleLogout}>
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