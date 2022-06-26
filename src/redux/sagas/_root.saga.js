import { all } from 'redux-saga/effects';
import contactSaga from './contact.saga';
import gallerySaga from './gallery.saga';

// CALLS ALL SAGAS
export default function* rootSaga() {
  yield all([
    contactSaga(),
    gallerySaga()
  ]);
}