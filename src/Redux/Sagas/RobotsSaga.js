import axios from 'axios';
import { put , takeEvery } from 'redux-saga/effects';

function* RobotRootSaga () {
  yield takeEvery ('FETCH_ROBOTS', fetchRobots);

}

function* fetchRobots () {

  const fetch = axios.get('https://jsonplaceholder.typicode.com/users')
  const response = fetch.json();

  yield put({ type: })


  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json()
  })
  .then(users => {
    this.setState({
      robots: users
    })
  })
  .catch(error => {
    console.log(`Error fetching from api`, error);
  })

}



export default RobotRootSaga;