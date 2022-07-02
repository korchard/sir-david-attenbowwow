import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// GET ROUTE - to retrieve gallery info
function* getOrganizations () {
    try {
      const response = yield axios.get(`/api/organizations`);
      yield put({ type: 'SET_ORGANIZATIONS', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in organizations.saga GET', error);
    }
}

function* organizationSaga() {
  yield takeEvery('GET_ORGANIZATIONS', getOrganizations);
}

export default gallerySaga;