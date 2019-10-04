import React, { Component } from 'react';

import './App.css';
import robots from '../Robot/Robot';
import Modal from '../Modal/Modal';
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList';


class App extends Component {

  state = {
    robots: robots,
    modal: false,
    searchfield: '',
  }

  getRobot = (item) => {

    let random = Math.floor(Math.random() * (this.state.robots.length * 10))
    return (
      `https://robohash.org/${random}200x200`
    )
  }

  handleCard = (item) => {
    console.log(`this is item`, item);

    this.setState({
      modal: !this.state.modal,
      name: item.name,
      username: item.username,
      email: item.email,

    })




  }

  openModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onSearchChange = (event) => {



    this.setState({
      searchfield: event.target.value,

    })


  }

  filteredRobots = () => {

    const blah = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (

      blah.map(item => {
        return (
        <div key={item.id} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
          <img alt='robots' src={`https://robohash.org/${item.id}200X200`} />
          <h2>{item.name}</h2>
          <h4>{item.username}</h4>
          <h4>{item.email}</h4>

        </div>
        )
      })

    );

  }


  render() {

    let newRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })


    return (
      < div className='tc'>
        <h1>RoboFriends</h1>

        <SearchBox searchChange={this.onSearchChange} />

        {/* <CardList  robots={newRobots}/>  */}

        {/* <div className='tc'>
          {this.state.searchField
            ?
            this.filteredRobots()
            :
            this.state.robots.map(item => {
              return (
                <div
                  key={item.id}
                  className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
                  onClick={() => this.handleCard(item)}
                // onClick = {this.openModal}
                >
                  <img alt="robots" src={this.getRobot()} />
                  <h2>{item.name}</h2>
                  <h4>{item.username}</h4>
                  <h4>{item.email}</h4>
                </div>
              );

            })
          }
        </div>

        <div>
          <Modal
            state={this.state}
            handleCard={this.handleCard}
            openModal={this.openModal}
          />
        </div> */}

        {/* did this one a little differently. I imported the robot object array from Robot.js and then just mapped through it */}

        {/* <div>
          {this.state.searchfield ?
            <div>
              {this.filteredRobots()} 
            </div>

            :

            robots.map(item => {
              return (
                <div key={item.id} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                  <img alt='robots' src={`https://robohash.org/${item.id}200X200`} />
                  <h2>{item.name}</h2>
                  <h4>{item.username}</h4>
                  <h4>{item.email}</h4>

                </div>
              )
            })
          }
        </div> */}
        <div>
          {this.filteredRobots()}
        </div>


      </div>
    )
  }
}




export default App;
