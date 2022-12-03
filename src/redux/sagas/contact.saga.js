import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// POST ROUTE - to send an email via nodemailer
function* sendMessage (action) {
    try {
      yield axios.post('/api/contact', action.payload);
      console.log('success', response)
    } catch (error) {
      console.log('Bad news bears...error in contact.saga POST', error);
    }
}

function* contactSaga() {
  yield takeEvery('SEND_MESSAGE', sendMessage);
}

export default contactSaga;