import React, { Component } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import Hotel from './pages/Hotel';
import Room from './pages/Room';
import Reserve from './pages/Reserve';
import Single from './pages/Single';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/hotels" />} />
          <Route path="/hotels" element={<Hotel />} />
          <Route path="/hotels/:id" element={<Single />} />
          <Route path="/rooms" element={<Room />} />
          <Route path="/reserve" element={<Reserve />} />
          {/* <Route path="/*" element={<Navigate to="/register"/>}/> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
