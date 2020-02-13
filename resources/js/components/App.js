import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Post from './Post';
import RightNav from './RightNav';

export default class App extends Component {
    render() {
        return (
          <div>
            <Header />
            <div className="main-page-grid">
              <Post />
              <RightNav />
            </div>
          </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
