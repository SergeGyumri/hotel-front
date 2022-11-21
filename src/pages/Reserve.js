import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHotels } from '../store/actions/hotels';
import Header from '../components/Header';

function Hotel() {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  const handleClick = async (ev) => {
    ev.preventDefault();
    setErrors({});
  };

  return (
    <>
      <div className="tm-top-bar-bg" />
      <Header />
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
                        // onChange={(ev) => setAddress(ev.target.value)}
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
                        // onChange={(ev) => setName(ev.target.value)}
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
                        // onChange={(ev) => setPhone(ev.target.value)}
                        name="Phone"
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="Phone"
                      />
                      {errors.phone ? <p className="error">{errors.phone[0]}</p> : null}
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

    </>

  );
}

export default Hotel;
