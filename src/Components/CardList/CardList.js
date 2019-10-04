import React, {Component} from 'react';

class CardList extends Component {
  render() {
    return (
        <div>
          {this.props.robots.map( item => {
            return (

              <div key={item.id} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                  <img alt='robots' src={`https://robohash.org/${item.id}200X200`} />
                  <h2>{item.name}</h2>
                  <h4>{item.username}</h4>
                  <h4>{item.email}</h4>

                </div>
            )
          })}
        </div>
    )
  }
}

export default CardList;