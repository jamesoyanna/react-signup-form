import React, { Component } from 'react';

export class SignUpForm extends Component {
    render() {
        return (
          <div>
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormFields">
                  <label className="FormFirld__Label" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="FormField__Input"
                    placeholder="Enter your full name"
                    name="name"
                  ></input>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="FormField__Input"
                    placeholder="Enter your full password"
                    name="password"
                  ></input>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">
                    E-mail Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="FormField__Input"
                    placeholder="Enter your Email address"
                    name="email"
                  ></input>
                </div>
                <label className="FormField__CheckboxLabel">
                  <input
                    className="FormField__Checkbox"
                    type="checkbox"
                    name="asAgreed"
                  >
                    I agree all statment in
                  </input>
                  <a href="FormField__TermsLink">terms of services</a>
                </label>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button>
                  <a href="#" className="FormField__Link">
                    I'am already member
                  </a>
                </div>
              </form>
            </div>
          </div>
        );
    }
}

export default SignUpForm;
