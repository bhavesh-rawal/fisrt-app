import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navigationbar from './Components/Navigationbar';
import './style/index.css'

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
