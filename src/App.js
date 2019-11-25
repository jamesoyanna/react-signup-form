import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__Aside"></div>
      <div className="App__Form">
        <div className="PageSwitcher">
          <a href="#" className="PageSwitcher__Item">
            {" "}
            Sign In
          </a>
          <a href="#" className="PageSwitcher__Item PageSticher__Item--active">
            SignUp
          </a>
        </div>
        <div className="FormTitle">
          <a href="#" className="FormTitle__Link">
            Sign In
          </a>{" "}
          or
          <a href="#" className="FormTitle__Link FormTitle__Link--Active">
            Sign Up
          </a>
        </div>

        <div className="FormCenter">
          <form className="FormFields" >
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
       <input className="FormField__Checkbox" type="checkbox" name="asAgreed">I agree all statment in</input>
       <a href="FormField__TermsLink">terms of services</a>
      </label>
    </form>
      </div>
    </div>
    </div>
  );
}

export default App;
