export const CREATE_ROOM_REQUEST = 'CREATE_ROOM_REQUEST';
export const CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS';
export const CREATE_ROOM_FAIL = 'CREATE_ROOM_FAIL';

export function createRoom(data, cb) {
  return {
    type: CREATE_ROOM_REQUEST,
    payload: {
      data,
      cb,
    },
  };
}

export const UPDATE_ROOM_REQUEST = 'UPDATE_ROOM_REQUEST';
export const UPDATE_ROOM_SUCCESS = 'UPDATE_ROOM_SUCCESS';
export const UPDATE_ROOM_FAIL = 'UPDATE_ROOM_FAIL';

export function updateRoom(data, cb) {
  return {
    type: UPDATE_ROOM_REQUEST,
    payload: {
      data,
      cb,
    },
  };
}

export const DELETE_ROOM_REQUEST = 'DELETE_ROOM_REQUEST';
export const DELETE_ROOM_SUCCESS = 'DELETE_ROOM_SUCCESS';
export const DELETE_ROOM_FAIL = 'DELETE_ROOM_FAIL';

export function deleteRoom(data, cb) {
  return {
    type: DELETE_ROOM_REQUEST,
    payload: {
      data,
      cb,
    },
  };
}

export const GET_ROOMS_LIST_REQUEST = 'GET_ROOMS_LIST_REQUEST';
export const GET_ROOMS_LIST_SUCCESS = 'GET_ROOMS_LIST_SUCCESS';
export const GET_ROOMS_LIST_FAIL = 'GET_ROOMS_LIST_FAIL';

export function getRooms() {
  return {
    type: GET_ROOMS_LIST_REQUEST,
  };
}

export const GET_SINGLE_ROOM_REQUEST = 'GET_SINGLE_ROOM_REQUEST';
export const GET_SINGLE_ROOM_SUCCESS = 'GET_SINGLE_ROOM_SUCCESS';
export const GET_SINGLE_ROOM_FAIL = 'GET_SINGLE_ROOM_FAIL';

export function getSingleRoom(data) {
  return {
    type: GET_SINGLE_ROOM_REQUEST,
    payload: {
      data,
    },
  };
}
