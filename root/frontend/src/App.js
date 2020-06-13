import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sales from './components/Sales/Sales';
import Lettings from './components/Lettings/Lettings';
import NewHomes from './components/NewHomes/NewHomes';
import Contact from './components/Contact/Contact';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

function App() {
  return (
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


          {/* <Route exact path = '/properties' component = { Properties } /> */}
          {/* <Route exact path = '/property' component = { Property } /> */}
        </Switch>
      </React.Fragment>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
