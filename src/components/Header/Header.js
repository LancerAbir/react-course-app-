import React, { useContext } from 'react';
import './Header.css'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {

    //** Data Come Form Context API  */
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser);

    return (
        <div>
            <h1 className="text-center header bg-secondary text-white" >Online Crash Course</h1>
            <Navbar bg="primary" className="mb-2" variant="dark">
                <Nav className="mr-auto">

                    <Link to="/">Home</Link>

                    <NavLink to="/about">About </NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/cartReview">Cart Review</NavLink>
                </Nav>

                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Nav className="ml-auto">

                </Nav>

                {
                    loggedInUser.successful === true ? <p> login </p> : <p> logout </p>
                }

                {
                    loggedInUser.isSignedIN = false ?
                        <Button onClick={() => setLoggedInUser({})} className="btn btn-danger">Logout</Button>
                        :
                        <NavLink to="/login">
                            <Button className="btn btn-danger">Login</Button>
                        </NavLink>
                }

            </Navbar>
        </div >

    );
};

export default Header;
