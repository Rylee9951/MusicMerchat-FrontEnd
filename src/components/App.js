import React from 'react';
import YeomanImage from './YeomanImage';
import './app.css';
import LoginSignup from './LoginSignup/LoginSignup';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <LoginSignup/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
