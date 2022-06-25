import { all } from 'redux-saga/effects';
import contactSaga from './contact.saga';
import portfolioSaga from './portfolio.saga';

// CALLS ALL SAGAS
export default function* rootSaga() {
  yield all([
    contactSaga(),
    portfolioSaga()
  ]);
}