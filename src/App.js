import React, { Component } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Hotel from './pages/Hotel';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/hotel" />} />
          <Route path="/hotel" element={<Hotel />} />
          {/* <Route path="/*" element={<Navigate to="/register"/>}/> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
