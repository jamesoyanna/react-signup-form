import React, { Component } from 'react';

export class SignInForm extends Component {
constructor(){
    super();

    this.state = {
      email: '',
      password: '',

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChange(e){
    let target = e.target;
    let value = target.type=== 'checkbox' ? target.checked: target.value;
    let name = target.name;

    thi.setState({
        [name]: value
    });

    }

this.handleSubmit(e){
    e.preventDefault();
    console.log('The form was sunmitted wuth the following data:')
    console.log(this.state);
}



}

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SignInForm;
