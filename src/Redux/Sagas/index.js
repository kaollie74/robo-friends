import { all } from 'redux-saga/effects';

//import sagas
import robotSaga from './RobotsSaga';




export default function* rootSaga() {
  yield all ([
    robotSaga()
  ]);
}