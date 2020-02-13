import React, { Component } from 'react';

export default class HistoryElements extends Component {
    render() {
        return (
          <div>
            <div className="recomendation-element">
              <div className="img-block">
                <a href="#">
                  <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fprofile.svg?1581168116837" />
                </a>
                <div className="data">
                <a href="#">
                  <span id="nickname">petya1755</span><br/>
                </a>
                <span id="name">10 hours ago</span><br/>
                </div>
              </div>
              <div>
                <a id="link" href="#">
                  Subscribe
                </a>
              </div>
            </div>
            <div className="recomendation-element">
              <div className="img-block">
                <a href="#">
                  <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fprofile.svg?1581168116837" />
                </a>
                <div className="data">
                  <a href="#">
                    <span id="nickname">petya1755</span><br/>
                  </a>
                  <span id="name">10 hours ago</span><br/>
                </div>
              </div>
              <div>
                <a id="link" href="#">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        );
    }
}
