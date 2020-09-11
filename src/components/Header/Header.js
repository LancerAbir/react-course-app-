import React from 'react';
import './Header.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className="text-center header bg-secondary text-white" >Online Crash Course</h1>
            <Navbar bg="primary" className="mb-2" variant="dark">
                <Link to="/">Home</Link>
                <Nav className="mr-auto">

                    <Link to="/">Home</Link>

                    <NavLink to="/about">About </NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/singleCourse">Single Course</NavLink>
                    <NavLink to="/cartReview">Cart Review</NavLink>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </div>

    );
};

export default Header;
