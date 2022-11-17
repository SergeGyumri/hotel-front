import { all, fork } from 'redux-saga/effects';
import users from './hotels';

export default function* watchers() {
  yield all([
    users,
  ].map(fork));
}
