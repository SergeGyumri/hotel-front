export const CREATE_HOTEL_REQUEST = 'CREATE_HOTEL_REQUEST';
export const CREATE_HOTEL_SUCCESS = 'CREATE_HOTEL_SUCCESS';
export const CREATE_HOTEL_FAIL = 'CREATE_HOTEL_FAIL';

export function createHotel(data, cb) {
  return {
    type: CREATE_HOTEL_REQUEST,
    payload: {
      data,
      cb,
    },
  };
}

export const UPDATE_HOTEL_REQUEST = 'UPDATE_HOTEL_REQUEST';
export const UPDATE_HOTEL_SUCCESS = 'UPDATE_HOTEL_SUCCESS';
export const UPDATE_HOTEL_FAIL = 'UPDATE_HOTEL_FAIL';

export function updateHotel(data, cb) {
  return {
    type: UPDATE_HOTEL_REQUEST,
    payload: {
      data,
      cb,
    },
  };
}

export const DELETE_HOTEL_REQUEST = 'DELETE_HOTEL_REQUEST';
export const DELETE_HOTEL_SUCCESS = 'DELETE_HOTEL_SUCCESS';
export const DELETE_HOTEL_FAIL = 'DELETE_HOTEL_FAIL';

export function deleteHotel(data, cb) {
  return {
    type: DELETE_HOTEL_REQUEST,
    payload: {
      data,
      cb,
    },
  };
}

export const GET_HOTELS_LIST_REQUEST = 'GET_HOTELS_LIST_REQUEST';
export const GET_HOTELS_LIST_SUCCESS = 'GET_HOTELS_LIST_SUCCESS';
export const GET_HOTELS_LIST_FAIL = 'GET_HOTELS_LIST_FAIL';

export function getHotels() {
  return {
    type: GET_HOTELS_LIST_REQUEST,
  };
}

export const GET_SINGLE_HOTEL_REQUEST = 'GET_SINGLE_HOTEL_REQUEST';
export const GET_SINGLE_HOTEL_SUCCESS = 'GET_SINGLE_HOTEL_SUCCESS';
export const GET_SINGLE_HOTEL_FAIL = 'GET_SINGLE_HOTEL_FAIL';

export function getSingleHotel(data) {
  return {
    type: GET_SINGLE_HOTEL_REQUEST,
    payload: {
      data,
    },
  };
}
