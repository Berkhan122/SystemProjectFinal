import React, { Component } from "react";
import "../css/LoginPage.css";
//import { Button, Form, Container } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import apiCalls from "../api/apiCalls";
import { isEmail } from "validator";
import Navigation from "../components/Navigation";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Bu alanın doldurulması zorunludur!
      </div>
    );
  }
};

const limit = (value) => {
  if (value >= 250) {
    return (
      <div className="alert alert-danger" role="alert">
        250 karakterden fazla girilemez.
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    //var history = useHistory();
    this.state = {
      username: "",
      password: "",
      email: "",
      users: [],
      successful: false,
      userRole: "User",
      about: "",
    };
  }

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

  handleRegister = (e) => {
    //e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    try {
      apiCalls
        .addUser(
          this.state.username,
          this.state.email,
          this.state.password,
          this.state.about,
          this.state.userRole
        )
        .then((response) => {
          this.setState({
            message: response.data.message + "User Added",
            successful: true,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <Container>
          <div className="col-md-12">
            <Form
              onSubmit={this.handleRegister}
              ref={(c) => {
                this.form = c;
              }}
            >
              {!this.state.successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleOnChangeUsername}
                      validation={[required, vusername]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="about">About</label>
                    <Input
                      type="textarea"
                      className="form-control"
                      name="about"
                      value={this.state.about}
                      onChange={this.handleOnChangeAbout}
                      validation={[required, limit]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleOnChangeEmail}
                      validation={[required, vpassword]}
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
                      validation={[required, email]}
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block">
                      Sign Up
                    </button>
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
            {!this.state.successful && <span>{this.state.message}</span>}
          </div>
        </Container>
      </div>
    );
  }
}
export default RegisterPage;
