import { takeLatest, call, put } from 'redux-saga/effects';
import {
  REGISTER_USER_REQUEST,
} from '../actions/hotels';
import Api from '../../Api';

export default function* watcher() {
  yield takeLatest(REGISTER_USER_REQUEST, handleRegister);
}

function* handleRegister(action) {
  try {
    const { data } = yield call(Api.createHotel, action.payload.data);
    console.log(data);
    yield put({
      // type: REGISTER_USER_SUCCESS,
      // payload: data,
    });
    if (action.payload.cb) {
      // action.payload.cb(null, data);
    }
  } catch (e) {
    yield put({
      // type: REGISTER_USER_FAIL,
    });
    if (action.payload.cb) {
      // action.payload.cb(e.response.data, null);
    }
  }
}
