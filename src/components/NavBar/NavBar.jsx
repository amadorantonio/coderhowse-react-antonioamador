import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo.png'
import {NavLink} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

let NavBar = ({categories}) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                <NavLink to={"/"} className="nav-link brand">
                <img
                    alt=""
                    src={logo}
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Tony´s Bikes
                </NavLink>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            categories.map((category) => {
                                return(
                                    <NavLink exact activeClassName="activeClass" className="p-1" to={"/categorias/" + category.text} key={category.id} style={{ textDecoration: 'none', color: 'rgba(0,0,0,.55)' }}>{category.text}</NavLink>
                                    // <Nav.Link href="#home" key={category.id}>{category.text}</Nav.Link>
                                )
                            })
                        }
                        <CartWidget></CartWidget>
                    </Nav>
                    <Nav className="d-flex">
                        Antonio Amador - CODERHOUSE
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar