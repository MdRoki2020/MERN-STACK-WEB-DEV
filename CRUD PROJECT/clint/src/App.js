import React, { Component } from 'react'
import { Navbar,Container,Nav,Form,FormControl,Button } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadPage from './Pages/ReadPage';
import ErrorPage from './Pages/ErrorPage'
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';

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
                    <Nav.Link as={Link} to={'/'}> Read</Nav.Link>
                    <Nav.Link as={Link} to={'/create'}> Create</Nav.Link>
                    <Nav.Link as={Link} to={'/update'}> Update</Nav.Link>
                    <Nav.Link as={Link} to={'/dashboard'}> Dashboard</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>

        <Routes>
          <Route path="/" element={<ReadPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    )
  }
}

