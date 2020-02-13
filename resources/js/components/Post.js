import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
          <div className="post">
            <div className="head">
              <div className="img-block">
                <a href="#">
                  <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fprofile.svg?1581168116837" />
                </a>
                <div className="data">
                  <a href="#">
                    <span id="nickname">petya1755</span><br/>
                  </a>
                  <span id="place">Times Square, New York City</span><br/>
                </div>
              </div>
              <div id="report">
                <a id="link" href="#">
                  <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fthumbnails%2Fellipsis.svg?1581177135992" />
                </a>
              </div>
            </div>
            <div id="body">
              <img src="https://cdn.glitch.com/d7d46297-c2d4-410e-a289-79b7d4e1cc56%2Fgirl.jpg" />
            </div>
            <div id="comment">
              <div id="button-grid">
                <div id="first-part">
                  <img src="https://cdn.glitch.com/d7d46297-c2d4-410e-a289-79b7d4e1cc56%2Fheart.svg?1581349982662" />
                  <img src="https://cdn.glitch.com/d7d46297-c2d4-410e-a289-79b7d4e1cc56%2Fthumbnails%2Fshare.svg?1581350267795" />
                  <img src="https://cdn.glitch.com/d7d46297-c2d4-410e-a289-79b7d4e1cc56%2Fthumbnails%2Fspeech-bubble.svg?1581350344127" />
                </div>
                <div id="second-part">
                  <img src="https://cdn.glitch.com/d7d46297-c2d4-410e-a289-79b7d4e1cc56%2Fthumbnails%2Fbookmark.svg?1581350428757" />
                </div>
              </div>
              <div id="like-grid">
                2055 likes
              </div>
            </div>
          </div>
        );
    }
}
