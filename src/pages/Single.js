import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
  useParams,
} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { getSingleHotel } from '../store/actions/hotels';
import Header from '../components/Header';

function Single() {
  const single = useSelector((store) => store.hotels.single);
  const rooms = useSelector((store) => store.hotels.rooms);
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
            {!_.isEmpty(single)
              ? (
                <div className="hotel">
                  <div className="hotel-info-block">
                    <h3 className="hotel-name">
                      welcome to:
                      {' '}
                      {single.name}
                    </h3>
                    <h5 className="hotel-address">
                      address:
                      {' '}
                      {single.address}
                    </h5>
                    <p className="hotel-phone">
                      phone:
                      {' '}
                      {single.phone}
                    </p>
                  </div>
                  <Carousel
                    cellAlign="right"
                    wrapAround
                    autoplay
                    autoplayInterval={2000}
                    renderBottomCenterControls={false}
                    renderCenterLeftControls={() => {
                    }}
                    renderCenterRightControls={() => {
                    }}
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
                </div>
              ) : null}
            <div className="hotel-rooms-block">
              <div className="single-hotel-rooms-title-block">
                {_.isEmpty(rooms)
                  ? <p className="single-hotel-rooms-title">this hotel has no rooms available</p> : (
                    <h2 className="single-hotel-rooms-title">
                      rooms in
                      {' '}
                      {single.name}
                    </h2>
                  )}
              </div>
              {!_.isEmpty(rooms)
                ? rooms.map((room) => (
                  <div key={room.id} className="room">
                    <Carousel
                      cellAlign="right"
                      wrapAround
                      autoplay
                      autoplayInterval={2000}
                      renderBottomCenterControls={false}
                      renderCenterLeftControls={() => {
                      }}
                      renderCenterRightControls={() => {
                      }}
                    >
                      {room.images.map((img) => (
                        <img
                          key={img.id}
                          className="hotel-img"
                          src={`http://localhost:4000/${img.url}`}
                          alt=""
                        />
                      ))}
                    </Carousel>
                    <div className="hotel-room-info-block">
                      <div className="room-info">
                        <div className="room-number">
                          <p className="number">
                            room: No
                            {' '}
                            {room.number}
                          </p>
                        </div>
                        <div className="beds">
                          <p className="bed-count">
                            singleBed:
                            {' '}
                            {room.singleBed}
                          </p>
                          {' '}
                          <p className="bed-count">
                            doubleBed:
                            {' '}
                            {room.doubleBed}
                          </p>
                        </div>
                        <div className="price-block">
                          <p className="price">
                            price:
                            {' '}
                            {room.price}
                            $ for day
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )) : null}
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Single;
