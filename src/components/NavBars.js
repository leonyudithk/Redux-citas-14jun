import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogoutSyn } from '../redux/actions/actionLogin';

const NavBars = () => {
    const dispatch= useDispatch()
    return (
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Introducción a Redux</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#home"><Link to="/add">Add</Link></Nav.Link>
            <Nav.Link ><Button onClick={() =>dispatch(actionLogoutSyn())}>Logout </Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        </div>
    );
};

export default NavBars;