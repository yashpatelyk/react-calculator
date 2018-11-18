import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

export function* test() {
  yield delay(2000)
  yield put({ type: 'temp' });
}

export function* watchTest() {
  yield takeEvery('test', test);
}

export function* rootSaga() {
  yield all([
    watchTest()
  ])
}