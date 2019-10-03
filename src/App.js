import React from 'react';

import './App.css';

const App = () => {
  return (
    <>
      <h1>RoboFriends</h1>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='robots' src='https://robohash.org/test?200x200' />
        <h2>Jane Doe</h2>
        <p>jane.doe@gmail.com</p>
      </div>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='robots' src='https://robohash.org/test2?200x200' />
        <h2>Bill Doe</h2>
        <p>Bill.doe@gmail.com</p>
      </div>
      <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt='robots' src='https://robohash.org/test3?200x200' />
        <h2>Sam Doe</h2>
        <p>Sam.doe@gmail.com</p>
      </div>
    </>
  )
}




export default App;
