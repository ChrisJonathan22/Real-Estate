import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route exact path = '/properties' component = { Properties } /> */}
          {/* <Route exact path = '/property' component = { Property } /> */}
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
