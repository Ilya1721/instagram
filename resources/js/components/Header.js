import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
          <div className="header">
            <div className="big-sub-header">
              <div className="logo">
                <img className="logo-img" src="http://icons.iconarchive.com/icons/custom-icon-design/mono-business-2/128/coffee-icon.png" />
                <div className="stick"></div>
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
              </div>
              <div className="search-bar">
                <form>
                  <input type="search" placeholder="Search" />
                </form>
              </div>
            </div>
            <div className="small-sub-header">
              <a href="#">
                <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fcardinal-point.svg?1581166863789" />
              </a>
              <a href="#">
                <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fpassion.svg?1581166786459" />
              </a>
              <a href="#">
                <img src="https://cdn.glitch.com/0f45c56a-63c6-4549-bb7a-b177fa4c4b51%2Fuser.svg?1581166909538" />
              </a>
            </div>
          </div>
        );
    }
}
