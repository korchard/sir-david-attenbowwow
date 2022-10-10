import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// GET ROUTE - to retrieve organization info
function* getOrganizations () {
    try {
      const response = yield axios.get(`/organizations`);
      yield put({ type: 'SET_ORGANIZATIONS', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in organizations.saga GET', error);
    }
}

function* organizationsSaga() {
  yield takeEvery('GET_ORGANIZATIONS', getOrganizations);
}

export default organizationsSaga;