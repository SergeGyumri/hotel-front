import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
  Link, NavLink, useParams,
} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { getSingleHotel } from '../store/actions/hotels';
import Header from '../components/Header';

function Single() {
  const single = useSelector((store) => store.hotels.single);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getSingleHotel(params.id));
  }, []);
  return (
    <>
      <div className="tm-top-bar-bg" />
      <Header />
      <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
        <div className="container">
          <div className="row">
            <div className="hotel-block">
              {!_.isEmpty(single)
                ? (
                  <div className="hotel">
                    <Carousel
                      cellAlign="right"
                      wrapAround
                      autoplay
                      autoplayInterval={2000}
                      renderBottomCenterControls={false}
                      renderCenterLeftControls={() => {}}
                      renderCenterRightControls={() => {}}
                    >
                      {single.images.map((img) => (
                        <img
                          key={img.id}
                          className="hotel-img"
                          src={`http://localhost:4000/${img.url}`}
                          alt=""
                        />
                      ))}
                    </Carousel>
                    <div className="hotel-info-flock">
                      <h3 className="hotel-name">{single.name}</h3>
                      <h3 className="hotel-address">{single.address}</h3>
                      <h3 className="hotel-phone">{single.phone}</h3>
                    </div>
                  </div>
                ) : null}
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Single;
