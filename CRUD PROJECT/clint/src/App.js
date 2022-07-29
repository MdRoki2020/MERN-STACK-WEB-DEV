import React, { Component } from 'react'
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">REACT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex me-auto">
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="">
                    <Nav.Link as={Link} to={'/'}> About</Nav.Link>
                    <Nav.Link as={Link} to={'/contact'}> Contact</Nav.Link>
                    <Nav.Link as={Link} to={'/admin'}> Admin</Nav.Link>
                    <Nav.Link as={Link} to={'/dashboard'}> Dashboard</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    )
  }
}

