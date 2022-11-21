import {
  takeLatest, call, put,
} from 'redux-saga/effects';
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
import Api from '../../Api';

export default function* watcher() {
  yield takeLatest(CREATE_ROOM_REQUEST, handleCreateRoom);
  yield takeLatest(GET_ROOMS_LIST_REQUEST, getRoomsList);
  yield takeLatest(GET_SINGLE_ROOM_REQUEST, getSingleRoom);
}

function* handleCreateRoom(action) {
  try {
    const { data } = yield call(Api.createRoom, action.payload.data);
    yield put({
      type: CREATE_ROOM_SUCCESS,
      payload: data,
    });
    if (action.payload.cb) {
      action.payload.cb(null, data);
    }
  } catch (e) {
    yield put({
      type: CREATE_ROOM_FAIL,
    });
    if (action.payload.cb) {
      action.payload.cb(e.response?.data || {}, null);
    }
  }
}

function* getRoomsList() {
  try {
    const { data } = yield call(Api.getRoomsList);
    yield put({
      type: GET_ROOMS_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: GET_ROOMS_LIST_FAIL,
    });
  }
}

function* getSingleRoom(action) {
  try {
    const { data } = yield call(Api.getSingleRoom, action.payload.data);
    yield put({
      type: GET_SINGLE_ROOM_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: GET_SINGLE_ROOM_FAIL,
    });
  }
}
