import React from 'react';
import './App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import NotFound from './components/NotFound';

import SingleCourse from './components/SingleCourse/SingleCourse';
import CartReview from './components/Cart/CartReview';



function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About} />

            <Route path="/contact" component={Contact} />

            <Route path="/blog" component={Blog} />

            <Route path="/course/:SingleCourseKey" component={SingleCourse} />

            <Route path="/cartReview" component={CartReview} />

            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
