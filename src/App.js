import React, { createContext, useState } from 'react';
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Auth/Login';
import Logout from './components/Logout/Logout';
import NotFound from './components/NotFound';

import SingleCourse from './components/SingleCourse/SingleCourse';
import CartReview from './components/Cart/CartReview';
import PrivateRoute from './components/Private Route/PrivateRoute';


//** Context API Store with Provider */
export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="container">
        <BrowserRouter>
          <p> Logged Email: {loggedInUser.email}  </p>
          <Header />
          <div className="row">
            <Switch>
              <Route exact path="/" component={Home} />

              <PrivateRoute path="/about">
                <About></About>
              </PrivateRoute>

              <Route path="/contact" component={Contact} />

              <Route path="/blog" component={Blog} />

              <Route path="/course/:SingleCourseKey" component={SingleCourse} />

              <Route path="/cartReview" component={CartReview} />

              <PrivateRoute path="/shipment">
                <Shipment></Shipment>
              </PrivateRoute>

              <Route path="/login" component={Login} />

              <Route path="/logout" component={Logout} />

              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
