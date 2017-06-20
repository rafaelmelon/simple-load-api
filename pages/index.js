/* jshint esversion:6 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      album: [],
      photo: []
    };

    const appUrl = 'http://jsonplaceholder.typicode.com';
    this.userList = `${appUrl}/users`;
    this.userAlbumList = `${appUrl}/albums?userId=`;
    this.userPhotoList = `${appUrl}/photos?albumId=`;

    this.getAlbumClick = this.getAlbumClick.bind(this);
    this.getPhotoClick = this.getPhotoClick.bind(this);
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

  getAlbumClick(id){
    this.api(this.userAlbumList + id).then((response)=> {
      this.setState({ album: response });
    });
  }

  getPhotoClick(id){
    this.api(this.userPhotoList + id).then((response)=> {
      this.setState({ photo: response });
    });
  }

  render() {
    return (
      <div>
        { this.state.user.length > 0  ? "" : this.getUser() }
        <div className="show-user" style={{ float:'left', width:'33%' }} >
          <ul>
            {this.state.user.map(user =>
              <li key={ user.id }>
                <span style={{ display:'block', margin: '5px 0' }}>{ user.name }</span>
                <button style={{ background:'cyan', border: '1px solid blue' }} onClick={() => this.getAlbumClick(user.id)}>Display album</button>
              </li>
            )}
          </ul>
        </div>
        <div className="show-album" style={{ float:'left', width:'33%' }} >
          <ul>
            {this.state.album.map(album =>
              <li>
                <span style={{ display:'block', margin: '5px 0' }}>{ album.userId } - { album.title }</span>
                <button style={{ background:'yellow', border: '1px solid orange' }} onClick={() => this.getPhotoClick(album.id)}>Display Photos</button>
              </li>
            )}
          </ul>
        </div>
        <div className="show-photo" style={{ float:'left', width:'33%' }} >
          {this.state.photo.map(photo => <img style={{ width:'20%' }} src={ photo.url } />)}
        </div>
      </div>
    );
  }
}

export default App;
