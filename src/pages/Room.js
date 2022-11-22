import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getRooms } from '../store/actions/rooms';
import Header from '../components/Header';

function Room() {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(params);
    dispatch(getRooms(params.id));
  }, []);
  return (
    <>
      <div className="tm-top-bar-bg" />
      <Header />
      <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
        <div className="container">
          <div className="row">
            <div className="hotel-block">
              <div className="hotel">
                <img
                  className="hotel-img"
                  src="http://localhost:4000/uploads/2/bbe5c278-b3fe-41d9-91a0-63f96d360a1f_Screenshot from 2022-11-20 13-47-48.png"
                  alt=""
                />
                <div className="hotel-info-block">
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
