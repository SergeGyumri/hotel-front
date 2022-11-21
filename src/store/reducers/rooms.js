import {
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ROOMS_LIST_FAIL,
  GET_ROOMS_LIST_REQUEST,
  GET_ROOMS_LIST_SUCCESS,
  GET_SINGLE_ROOM_FAIL,
  GET_SINGLE_ROOM_REQUEST,
  GET_SINGLE_ROOM_SUCCESS,
} from '../actions/rooms';

const initialState = {
  rooms: [],
  createRoomRequestStatus: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CREATE_ROOM_REQUEST: {
      return {
        ...state,
      };
    }
    case CREATE_ROOM_SUCCESS: {
      return {
        ...state,
      };
    }
    case CREATE_ROOM_FAIL: {
      return {
        ...state,
      };
    }
    case GET_ROOMS_LIST_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_ROOMS_LIST_SUCCESS: {
      return {
        ...state,
        rooms: action.payload.rooms,
      };
    }
    case GET_ROOMS_LIST_FAIL: {
      return {
        ...state,
      };
    }
    case GET_SINGLE_ROOM_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_SINGLE_ROOM_SUCCESS: {
      return {
        ...state,
        single: action.payload.room,
      };
    }
    case GET_SINGLE_ROOM_FAIL: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
