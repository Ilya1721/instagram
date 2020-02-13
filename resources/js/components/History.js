import React, { Component } from 'react';
import HistoryElements from './HistoryElements';

export default class History extends Component {
    render() {
        return (
          <div className="history">
            <div className="head">
              <div id="story-text">Stories</div>
              <div>
                <a id="link" href="#">
                  View all
                </a>
              </div>
            </div>
            <HistoryElements />
          </div>
        );
    }
}
