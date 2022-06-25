import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// GET ROUTE - to retrieve portfolio
function* getPortfolio () {
    try {
      const response = yield axios.get(`/api/portfolio`);
      // const response = yield axios.get(`https://vpgl2x3kjb.execute-api.us-east-2.amazonaws.com/staging/projectData`);
      yield put({ type: 'SET_PORTFOLIO', payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log('Bad news bears...error in portfolio.saga GET', error);
    }
}

function* portfolioSaga() {
  yield takeEvery('GET_PORTFOLIO', getPortfolio);
}

export default portfolioSaga;