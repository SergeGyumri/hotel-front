import { all, fork } from 'redux-saga/effects';
import hotels from './hotels';

export default function* watchers() {
  yield all([
    hotels,
  ].map(fork));
}
