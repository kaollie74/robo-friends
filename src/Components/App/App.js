
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../CardList/CardList';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import Modal from '../Modal/Modal';
import robots from '../Robot/Robot';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import './App.css';
import setSearchField from '../../Redux/Reducers/actionReducer';



const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {

  state = {
    robots: [],
    // searchfield: '',
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

  // onSearchChange = (event) => {
  //   this.setState({
  //     searchfield: event.target.value,
  //   })
  // }

  filteredRobots = () => {



    // destructoring code to make cleaner. this is equivalent
    // writing 'this.state.robots'.
    const { robots} = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredRobots = robots.filter(item => {
      return item.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (

      filteredRobots.map(item => {
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

    const { onSearchChange, searchField } = this.props;


    let newRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })


    return (
      <>

        < div className='tc' className='App'>
          <h1 className='f1'>RoboFriends</h1>

          <SearchBox searchChange={onSearchChange} />
          <div>
            <ErrorBoundry>
              <Scroll>
                <CardList robots = {newRobots}/>
              </Scroll>
            </ErrorBoundry>
          </div>


        </div>
      </>
    )
  }
}

// const mapStateToProps = (reduxStore) => ({
//   reduxStore
// })






export default connect(mapStateToProps, mapDispatchToProps)(App);
