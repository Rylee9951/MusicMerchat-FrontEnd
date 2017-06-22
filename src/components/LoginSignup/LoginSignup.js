import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './loginsignup.cssmodule.css';

class LoginSignup extends React.Component {

  render() {
    return (
      <div className="loginsignup-component" styleName="loginsignup-component">
        <div className="wrapper">
        <div className="header">
          <div className="title">MusicMerchant</div>
          <button className="login_signup">Login</button>
          <button className="login_signup">Signup</button>
        </div>
        <div>
          <div className="background_image">
            <div className="tagline">The best solution to sell or trade local musician's gear</div>
          </div>
        </div>
        <div className="registration_container">
          <div className="about_container">
            <p className="about">Music Merchant offers a more centralized commercial experience focusing on your city.</p>
            <p className="about">Surround yourself with your local community to buy / sell / trade any of your personal gear.</p>
            <p className="about">Connect with other musicians and create!</p>
          </div>
          <div className="signup_container">
            <div className="register_title">Register</div>
            <form>
            <div className="input_container">
              <div className="input_wrapper">
                <label className="labels">Email</label>
                <input className="input_fields" type="text" />
              </div>
              <div className="input_wrapper">
                <label className="labels">Password</label>
                <input className="input_fields" type="password" /></div>
              <div className="input_wrapper">
                <label className="labels">First Name</label>
                <input className="input_fields" type="text" /></div>
              <div className="input_wrapper">
                <label className="labels">Last Name</label>
                <input className="input_fields" type="text" />
              </div>
            </div>
            <div className="input_container">
              <div className="input_wrapper">
                <label className="labels">State</label>
                <select className="input_fields">
                  <option value="">Select Your State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select></div>
              <div className="input_wrapper">
                <label className="labels">City</label>
                <select className="input_fields">
                  <option value="">Select Your City</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                  <option value="Philadelphia">Philadelphia</option>
                  <option value="Phoenix">Phoenix</option>
                  <option value="San Antonio">San Antonio</option>
                  <option value="San Diego">San Diego</option>
                  <option value="Dallas">Dallas</option>
                  <option value="Las Vegas">Las Vegas</option>
                </select>
              </div>
              <div className="input_wrapper">
                <label className="labels">ZIP Code</label>
                <input className="input_fields" type="text" /></div>
            </div>
            <div className="button_div">
              <button className="submit_button" onSubmit={this.handleSubmit} type="submit">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

LoginSignup.displayName = 'LoginSignup';
LoginSignup.propTypes = {};
LoginSignup.defaultProps = {};

export default cssmodules(LoginSignup, styles);
