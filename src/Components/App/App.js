import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import Modal from '../Modal/Modal';
import robots from '../Robot/Robot';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import './App.css';


class App extends Component {

  state = {
    robots: [],
    modal: false,
    searchfield: '',
  }

  componentDidMount() {
    this.getRobot();
  }

  getRobot = (item) => {

    // let random = Math.floor(Math.random() * (this.state.robots.length * 10))
    //  let robotArray = `https://robohash.org/${random}200x200`

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
          <div key={item.id} className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
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
      < div className='tc' className='App'>
        <h1 className='f1'>RoboFriends</h1>

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
          <Scroll>
            {this.filteredRobots()}
          </Scroll>
        </div>


      </div>
    )
  }
}




export default App;
