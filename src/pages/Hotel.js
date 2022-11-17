import React, { useState } from 'react';
import _ from 'lodash';

import Api from '../Api';

function Hotel() {
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [files, setFiles] = useState(null);
  const handleClick = async (ev) => {
    ev.preventDefault();
    console.log(name, address, phone);
    const images = [];
    _.forEach(files, (file) => {
      images.push(file);
    });
    const user = await Api.createHotel({
      name,
      address,
      phone,
      images,
    });
    console.log(user);
  };
  return (
    <>
      <div className="tm-top-bar-bg" />
      <div className="tm-top-bar" id="tm-top-bar">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg narbar-light">
              <a className="navbar-brand mr-auto" href="#">
                <img src="./img/logo.png" alt="Site logo" />
                Level
              </a>
              <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#top">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-4">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-5">Blog Entries</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-6">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="tm-section tm-bg-img" id="tm-section-1">
        <div className="tm-bg-white ie-container-width-fix-2">
          <div className="container ie-h-align-center-fix">
            <div className="row">
              <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix">
                <form action="index.html" method="get" className="tm-search-form tm-section-pad-2">
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-element tm-form-element-100">
                      <i className="fa fa-map-marker fa-2x tm-form-element-icon" />
                      <input
                        onChange={(ev) => setAddress(ev.target.value)}
                        name="Address"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Address..."
                      />
                    </div>
                    <div className="form-group tm-form-element ">
                      <input
                        onChange={(ev) => setName(ev.target.value)}
                        name="HotelName"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Hotel Name"
                      />
                      <i className="fa fa-2x fa-solid fa-building tm-form-element-icon" />
                    </div>
                    <div className="form-group tm-form-element ">
                      <input
                        onChange={(ev) => setPhone(ev.target.value)}
                        name="Phone"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Phone"
                      />
                      <i className="fa fa-2x fa-duotone fa-phone tm-form-element-icon" />
                    </div>
                    <div className="form-group tm-form-element tm-form-element-100">
                      <i className="fa fa-image fa-2x tm-form-element-icon" />
                      <input
                        onChange={(e) => setFiles(e.target.files)}
                        multiple
                        type="file"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                  </div>
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-element tm-form-element-2">
                      <button onClick={handleClick} type="submit" className="btn btn-primary tm-btn-search">
                        Check
                        Availability
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Hotel;
