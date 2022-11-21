import React, { useState } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createHotel } from '../store/actions/hotels';

function Room() {
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [files, setFiles] = useState(null);

  const handleClick = async (ev) => {
    ev.preventDefault();
    setErrors({});
    const images = [];
    _.forEach(files, (file) => {
      images.push(file);
    });
    dispatch(createHotel({
      name,
      address,
      phone,
      images,
    }, (err, data) => {
      console.log(err, 'err');
      console.log(data, 'data');
      if (!_.isEmpty(err.errors)) {
        setErrors(err.errors);
      }
    }));
  };

  return (
    <>
      <div className="tm-top-bar-bg" />
      <div className="tm-top-bar" id="tm-top-bar">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg narbar-light">
              <Link className="navbar-brand mr-auto" to="/hotels">
                <img src="./img/logo.png" alt="Site logo" />
                Hotel
              </Link>
              <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/hotels">Hotels</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/rooms">Rooms</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/reserve">Reserve</Link>
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
                <form onSubmit={handleClick} className="tm-search-form tm-section-pad-2">
                  {errors.error ? <p className="error">{errors.error[0]}</p> : null}
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
                      {errors.address ? <p className="error">{errors.address[0]}</p> : null}
                    </div>
                    <div className="form-group tm-form-element ">
                      <i className="fa fa-2x fa-solid fa-building tm-form-element-icon" />
                      <input
                        onChange={(ev) => setName(ev.target.value)}
                        name="HotelName"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Hotel Name"
                      />
                      {errors.name ? <p className="error">{errors.name[0]}</p> : null}
                    </div>
                    <div className="form-group tm-form-element ">
                      <i className="fa fa-2x fa-duotone fa-phone tm-form-element-icon" />
                      <input
                        onChange={(ev) => setPhone(ev.target.value)}
                        name="Phone"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Phone"
                      />
                      {errors.phone ? <p className="error">{errors.phone[0]}</p> : null}
                    </div>
                    <div className="form-group tm-form-element tm-form-element-100">
                      <i className="fa fa-image fa-2x tm-form-element-icon" />
                      <input
                        onChange={(ev) => setFiles(ev.target.files)}
                        multiple
                        type="file"
                        className="form-control"
                        id="inputCity"
                      />
                      {errors.images ? <p className="error">{errors.images[0]}</p> : null}
                    </div>
                  </div>
                  <div className="form-row tm-search-form-row">
                    <div className="form-group tm-form-element tm-form-element-2">
                      <button type="submit" className="btn btn-primary tm-btn-search">
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

      <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
        <div className="container">
          <div className="row">
            <div className="hotel-block">
              <div className="hotel">
                <img className="hotel-img" src="http://localhost:4000/uploads/2/bbe5c278-b3fe-41d9-91a0-63f96d360a1f_Screenshot from 2022-11-20 13-47-48.png" alt="" />
                <div className="hotel-info-flock">
                  <h3 className="hotel-name">hotel name</h3>
                  {/* <h3 className="hotel-address">address</h3> */}
                  {/* <h3 className="hotel-phone">phone</h3> */}
                </div>
                <Link className="hotel-road-more" to="/">road more</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Room;
