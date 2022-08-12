import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// GET ROUTE - to retrieve gallery info
function* getGallery () {
    try {
      const response = yield axios.get(`/.netlify/functions/api/galleryy`);
      yield put({ type: 'SET_GALLERY', payload: response.data });
    } catch (error) {
      console.log('Bad news bears...error in gallery.saga GET', error);
    }
}

function* gallerySaga() {
  yield takeEvery('GET_GALLERY', getGallery);
}

export default gallerySaga;