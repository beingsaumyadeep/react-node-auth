import React, { Component } from "react";
import {  Link } from "react-router-dom";
import { login } from "./UserFunction";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: '',
          errors: ''
          
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    componentDidMount(){
        document.body.style.background = "#17a2b8";
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
      e.preventDefault()
  
      const user = {
        email: this.state.email,
        password: this.state.password
      }
  
      login(user).then(res => {
        if (res) {
          this.props.history.push('/dashboard')
        }
      })
    }

    
  render() {
    return (
      <div>
        <div id="login">
          
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-form" className="form" onSubmit={this.onSubmit}>
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label htmlFor="email" className="text-info">
                        Email:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="email"
                        id="username"
                        className="form-control"
                        value = {this.state.email}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-info">
                        Password: {this.state.errors}
                      </label>
                      <br />
                      <input
                        type="text"
                        name="password"
                        id="password"
                        className="form-control"
                        value = {this.state.password}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="remember-me" className="text-info">
                        <span></span> 
                        <span>                         
                        </span>
                      </label>
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="Login"
                      />
                    </div>
                    <div id="register-link" className="text-right">
                        
                      <Link className="text-info" to="/register">Register here</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
