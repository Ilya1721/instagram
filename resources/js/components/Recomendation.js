import React, { Component } from 'react';
import RecomendationElements from './RecomendationElements';

export default class Recomendation extends Component {
    render() {
        return (
          <div className="recomendation">
            <div className="head">
              <div id="story-text">Recomendations for you</div>
              <div>
                <a id="link" href="#">
                  All
                </a>
              </div>
            </div>
            <RecomendationElements />
          </div>
        );
    }
}
