import React, { useEffect } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { getHotels } from '../store/actions/hotels';
import Header from '../components/Header';

function Hotel() {
  const hotels = useSelector((store) => store.hotels.hotels);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  return (
    <>
      <div className="tm-top-bar-bg" />
      <Header />
      <div className="tm-section tm-section-pad tm-bg-gray" id="tm-section-4">
        <div className="container">
          <div className="row">
            <div className="hotel-block">
              {!_.isEmpty(hotels)
                ? hotels.map((hotel) => (
                  <div key={hotel.id} className="hotel">
                    <Carousel
                      cellAlign="right"
                      wrapAround
                      autoplay
                      autoplayInterval={2000}
                      renderBottomCenterControls={false}
                      renderCenterLeftControls={() => {}}
                      renderCenterRightControls={() => {}}
                    >
                      {hotel.images.map((img) => (
                        <img
                          key={img.id}
                          className="hotel-img"
                          src={`http://localhost:4000/${img.url}`}
                          alt=""
                        />
                      ))}
                    </Carousel>
                    <div className="hotel-info-block">
                      <h3 className="hotel-name">
                        hotel:
                        {' '}
                        {hotel.name}
                      </h3>
                    </div>
                    <button onClick={() => navigate(`${hotel.id}`)} type="submit" className="hotel-road-more">
                      road more
                    </button>
                  </div>
                )) : null}
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Hotel;
