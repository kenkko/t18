import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            users: JSON.parse(localStorage.getItem('users'))
        };
        // this.emails = [
        //     '123@gmail.com', 'moderator@gmail.com', 'analyst@gmail.com'
        // ];
        // this.password = '123';

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        // if(!this.emails.includes(this.state.email)) return;
        // if(this.password != this.state.password) return;

        let loginUser = this.state.users.find(user => user.email === this.state.email && user.password === this.state.password);
        if(!loginUser){
            alert('wrong email or password');
            return;
        }
        loginUser.logIn = true;
        // if(this.state.email == '123@gmail.com') this.state.role = 'guest';
        // if(this.state.email == 'moderator@gmail.com') this.state.role = 'moderator';
        // if(this.state.email == 'analyst@gmail.com') this.state.role = 'analyst';
        // this.state.logIn = true;


        localStorage.setItem('loginUser', JSON.stringify(loginUser));

        e.preventDefault();
        window.location.reload();
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign In</button>
                </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
