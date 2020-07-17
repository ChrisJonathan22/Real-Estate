import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sales from './components/Sales/Sales';
import Lettings from './components/Lettings/Lettings';
import NewHomes from './components/NewHomes/NewHomes';
import Contact from './components/Contact/Contact';
import Info from './components/Info/Info';
import Form from './components/Form/Form';
import Testimonial from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path = '/sales' component = {Sales} />
            <Route exact path = '/lettings' component = {Lettings} />
            <Route exact path = '/new-homes' component = {NewHomes} />
            <Route exact path = '/contact' component = {Contact} />
            <Route exact path = '/info' component = {Info} />
          </Switch>
        </React.Fragment>
        <Form />
        <Testimonial />
        <Footer />
      </BrowserRouter>
    </Provider>  
  );
}

export default App;
