import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink as RRNavLink, Route } from 'react-router-dom';
import CartIcon from '../icons/CartIcon';
import SearchIcon from '../icons/SearchIcon';
import 'bootstrap/dist/css/bootstrap.css';

class MyNav extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>NN Editores</Navbar.Brand>
                <Nav className="mr-auto">
                    <Route>
                        <Nav.Link tag={RRNavLink} exact to="/">Inicio</Nav.Link>
                    </Route>
                    <Route>
                        <Nav.Link tag={RRNavLink} exact to="/prducts">Catálogo</Nav.Link>
                    </Route>
                    <Route>
                        <Nav.Link href="#authors">Nuestros autores</Nav.Link>
                    </Route>
                    <Route>
                        <Nav.Link href="#thisisus">Nosotros</Nav.Link>
                    </Route>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                    <Button variant="outline-info">
                        <SearchIcon />
                    </Button>
                </Form>
                <CartIcon />
            </Navbar>
        )
    }
}

export default MyNav