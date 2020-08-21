import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Styles from 'bootstrap/dist/css/bootstrap.css'

class MyNav extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">NN Editores</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#catalog">Catálogo</Nav.Link>
                    <Nav.Link href="#authors">Nuestros autores</Nav.Link>
                    <Nav.Link href="#thisisus">Nosotros</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
            </Navbar>
        )
    }
}

export default MyNav