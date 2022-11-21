import {
  CREATE_HOTEL_FAIL,
  CREATE_HOTEL_REQUEST,
  CREATE_HOTEL_SUCCESS,
  GET_HOTELS_LIST_FAIL,
  GET_HOTELS_LIST_REQUEST,
  GET_HOTELS_LIST_SUCCESS,
  GET_SINGLE_HOTEL_FAIL,
  GET_SINGLE_HOTEL_REQUEST,
  GET_SINGLE_HOTEL_SUCCESS,
} from '../actions/hotels';

const initialState = {
  hotels: [],
  createHotelRequestStatus: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_HOTEL_REQUEST: {
      return {
        ...state,
      };
    }
    case CREATE_HOTEL_SUCCESS: {
      return {
        ...state,
      };
    }
    case CREATE_HOTEL_FAIL: {
      return {
        ...state,
      };
    }
    case GET_HOTELS_LIST_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_HOTELS_LIST_SUCCESS: {
      return {
        ...state,
        hotels: action.payload.hotels,
      };
    }
    case GET_HOTELS_LIST_FAIL: {
      return {
        ...state,
      };
    }
    case GET_SINGLE_HOTEL_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_SINGLE_HOTEL_SUCCESS: {
      return {
        ...state,
        single: action.payload.hotel,
      };
    }
    case GET_SINGLE_HOTEL_FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
