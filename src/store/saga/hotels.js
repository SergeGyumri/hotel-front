import {
  takeLatest, call, put,
} from 'redux-saga/effects';
import {
  CREATE_HOTEL_FAIL,
  CREATE_HOTEL_REQUEST,
  CREATE_HOTEL_SUCCESS,
  GET_HOTELS_LIST_FAIL,
  GET_HOTELS_LIST_REQUEST,
  GET_HOTELS_LIST_SUCCESS, GET_SINGLE_HOTEL_FAIL,
  GET_SINGLE_HOTEL_REQUEST, GET_SINGLE_HOTEL_SUCCESS,
} from '../actions/hotels';
import Api from '../../Api';

export default function* watcher() {
  yield takeLatest(CREATE_HOTEL_REQUEST, handleCreateHotel);
  yield takeLatest(GET_HOTELS_LIST_REQUEST, getHotelsList);
  yield takeLatest(GET_SINGLE_HOTEL_REQUEST, getSingleHotel);
}

function* handleCreateHotel(action) {
  try {
    const { data } = yield call(Api.createHotel, action.payload.data);
    yield put({
      type: CREATE_HOTEL_SUCCESS,
      payload: data,
    });
    if (action.payload.cb) {
      action.payload.cb(null, data);
    }
  } catch (e) {
    yield put({
      type: CREATE_HOTEL_FAIL,
    });
    if (action.payload.cb) {
      action.payload.cb(e.response?.data || {}, null);
    }
  }
}

function* getHotelsList() {
  try {
    const { data } = yield call(Api.getHotelsList);
    yield put({
      type: GET_HOTELS_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: GET_HOTELS_LIST_FAIL,
    });
  }
}

function* getSingleHotel(action) {
  try {
    const { data } = yield call(Api.getSingleHotel, action.payload.data);
    yield put({
      type: GET_SINGLE_HOTEL_SUCCESS,
      payload: data,
    });
  } catch (e) {
    yield put({
      type: GET_SINGLE_HOTEL_FAIL,
    });
  }
}
