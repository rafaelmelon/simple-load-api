/* jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const MenuItem = ( { title } ) => (
  <li>
    { title }
    <button onClick={this.getAlbumClick}>Display album</button>
  </li>
);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      album: []
    };

    const appUrl = 'http://jsonplaceholder.typicode.com';
    this.userList = `${appUrl}/users`;
    this.userAlbumList = `${appUrl}/albums`;

    this.getAlbumClick = this.getAlbumClick.bind(this);
  }

  api(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  getUser(){
    this.api(this.userList).then((response)=> {
      this.setState({ user: response });
    });
  }

  getAlbumClick(){
    this.api(this.userAlbumList).then((response)=> {
      this.setState({ album: response });
    });
  }

  render() {
    return (
      <div>
        { this.state.user.length > 0  ? "User loaded" : this.getUser() }
        <div className="show-user">
          <ul>
            {this.state.user.map(user =>
              <li key={ user.id }>
                <span>{ user.name }</span>
                <button onClick={ this.getAlbumClick }>Display album</button>
              </li>
            )}
          </ul>
        </div>
        <div className="show-all">
          <ul>
            {this.state.album.map(album =>
              <li key={ album.id }>
                <span>{ album.title }</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
