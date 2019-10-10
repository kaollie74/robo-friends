import axios from 'axios';
import { put , takeEvery } from 'redux-saga/effects';

function* RobotRootSaga () {
  yield takeEvery ('FETCH_ROBOTS', fetchRobots);

}

function* fetchRobots (action) {

  try {

  const response = axios.get('https://jsonplaceholder.typicode.com/users')
    
    yield put ({ type: 'SET_ROBOTS', payload: response.data})
  }

  catch(error) {
    console.log(`Error catching data from API`, error);
  }


 

  //yield put({ type: 'SET_ROBOTS', payload: response})




 }



export default RobotRootSaga;