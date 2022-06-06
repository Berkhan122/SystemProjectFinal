import React, { Component } from "react";
import "../css/LoginPage.css";
//import { Button, Form, Container } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import apiCalls from "../api/apiCalls";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import MainPage from "./MainPage";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthenticationService from "../api/AuthenticationService";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bu alanın doldurulması zorunludur!
      </div>
    );
  }
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginstate: false,
      loginMessage: "",
      message: "",
      users: [],
      successful: false,
    };
  }
  // componentDidMount() {
  //   apiCalls.getUsers().then((response) => {
  //     this.setState({ users: response.data });
  //     console.log(this.state.users);
  //   });
  // }

  handleOnChangeUsername = (event) => {
    //console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  handleOnChangePassword = (event) => {
    //console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };

  handleOnChangeAbout = (event) => {
    //console.log(event.target.value);
    this.setState({
      about: event.target.value,
    });
  };

  handleOnChangeEmail = (event) => {
    //console.log(event.target.value);
    this.setState({
      email: event.target.value,
    });
  };

  CheckLogin = () => {
    if (this.state.username === "Kolsuz" && this.state.password === "dummy") {
      this.setState({ successful: true, userRole: "user" });
      AuthenticationService.registerSuccessfullLogin(
        this.state.username,
        this.state.password,
        this.state.userRole
      );

      console.log(this.state.successful + this.state.userRole);
    } else if (
      this.state.username === "Admin" &&
      this.state.password === "pass123"
    ) {
      this.setState({ successful: true, userRole: "admin" });
      AuthenticationService.registerSuccessfullLogin(
        this.state.username,
        this.state.password,
        this.state.userRole
      );

      console.log(this.state.successful + this.state.userRole);
    } else {
      AuthenticationService.logout();
    }
  };

  render() {
    return (
      <>
        <div>
          <Navigation />
          <Container>
            <div className="col-md-12">
              <Form
                onClick={this.CheckLogin}
                ref={(c) => {
                  this.form = c;
                }}
              >
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleOnChangeUsername}
                    validation={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleOnChangePassword}
                    validation={[required]}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary btn-block"
                    disabled={this.state.loginstate}
                  >
                    {this.state.loginstate && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                  </button>
                </div>

                {this.state.loginMessage && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.loginMessage}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{ display: "none" }}
                  ref={(c) => {
                    this.checkBtn = c;
                  }}
                />
              </Form>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default LoginPage;
