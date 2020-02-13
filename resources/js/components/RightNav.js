import React, { Component } from 'react';
import History from './History';
import Recomendation from './Recomendation';
import Footer from './Footer';

export default class RightNav extends Component {
    render() {
        return (
          <div>
            <div className="account">
              <a href="#">
                <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fprofile.svg?1581168116837" />
              </a>
              <div className="data">
                <a href="#">
                  <span id="nickname">petya1755</span><br/>
                </a>
                <span id="name">petya</span><br/>
              </div>
            </div>
            <History />
            <Recomendation />
            <Footer />
          </div>
        );
    }
}
