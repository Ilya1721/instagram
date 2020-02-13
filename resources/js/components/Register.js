import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Register extends Component {
    render() {
        return (
          <div className="register">
            <img id="first-img" src="https://cdn.glitch.com/c85367af-7519-41d9-9979-39a7801cd355%2Fiphone_phone.png" />
            <img id="second-img" src="https://cdn.glitch.com/c85367af-7519-41d9-9979-39a7801cd355%2Fandroid_phone.png" />
            <div id="registration">
              <div id="register-form">
                <div>
                  <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                </div>
                <form method="post" action="/login">
                  <input type="hidden" name="_token" value={csrf_token} />
                  <input type="email" name="email" placeholder="Email" /><br />
                  <input type="password" name="password" placeholder="Password" /><br />
                  <input type="submit" onSubmit={this.submit} value="Log in" /><br />
                </form>
              </div>
              <div id="register-ad">
                Don't have account yet? <a id="link" href="#">Register now</a>
              </div>
            </div>
          </div>
        );
    }
    submit() {
      alert('h');
      fetch('/words', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        body: JSON.stringify({
          //parameters
        })
      }).then((response)=>{
        console.log(response);
      });
    }
}

if (document.getElementById('register')) {
    ReactDOM.render(<Register />, document.getElementById('register'));
}
