import React, { Component } from 'react';

import './App.css';
import robots from '../Robot/Robot';
import Modal from '../Modal/Modal';


class App extends Component {

  state = {
    robots: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net'
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org'
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca'
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info'
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz'
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me'
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz'
      }
    ],

    modal: false
  }

  getRobot = (item) => {

    let random = Math.floor(Math.random() * (this.state.robots.length * 10))
    return (
      `https://robohash.org/${random}200x200`
    )
  }

  handleCard = (item) => {
    console.log(`this is item`, item);


  }

  openModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }


  render() {



    return (
      <>
        <h1>RoboFriends</h1>

        <div>
          {this.state.robots.map(item => {
            return (
              <div
                key={item.id}
                className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
                // onClick={() => this.handleCard(item)}
                onClick = {this.openModal}
              >
                <img alt="robots" src={this.getRobot()} />
                <h2>{item.name}</h2>
                <h4>{item.username}</h4>
                <h4>{item.email}</h4>
              </div>
            );

          })} {/* end of this.state.robots.map */}
        </div>

        <div>
          <Modal state = {this.state} openModal={this.openModal} />
        </div>

        {/* did this one a little differently. I imported the robot object array from Robot.js and then just mapped through it */}

        {/* <div>
          {robots.map( item => {
            return (
              <div key={item.id} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
              <img  alt='robots' src={`https://robohash.org/${item.id}200X200`}/>  
              <h2>{item.name}</h2>
              <h4>{item.username}</h4>
              <h4>{item.email}</h4>

              </div>
            )
          })}
        </div> */}



      </>
    )
  }
}




export default App;
