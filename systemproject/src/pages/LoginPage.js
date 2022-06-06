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

  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      loginMessage: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      apiCalls.login(this.state.username, this.state.password).then(
        () => {
          this.props.History.push("/userpage");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.setState({
            loading: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  };

  registerNewUser = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    try {
      apiCalls.addUser().then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleRegister = (e) => {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      apiCalls
        .register(this.state.username, this.state.email, this.state.password)
        .then(
          (response) => {
            this.setState({
              message: response.data.message,
              successful: true,
            });
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.setState({
              successful: false,
              message: resMessage,
            });
          }
        );
    }
  };

  CheckLogin = () => {
    //const navigate = useNavigate();
    if (this.state.username === "Kolsuz" && this.state.password === "dummy") {
      this.setState({ successful: true, userRole: "user" });
      AuthenticationService.registerSuccessfullLogin(
        this.state.username,
        this.state.password,
        this.state.userRole
      );

      console.log(this.state.successful + this.state.userRole);
      //navigate(`/mainpage`);
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

    // if (this.state.successful === true) {
    //   this.NavigateTo(`/mainpage`);
    // }
  };

  //#region Yedek
  // // if (this.state.username === this.state.users[i].email && this.state.password === this.state.users[i].firstname)
  // CheckLogin = () => {
  //   apiCalls.getUsers.then((response) => this.set);
  //   console.log(this.state.users);
  //   for (let i = 0; i < this.state.users.length; i++) {
  //     if (
  //       this.state.username === this.state.users[i].email &&
  //       this.state.password === this.state.users[i].firstName
  //     ) {
  //       //this.setState({currentView: <MainPage/>});
  //       this.setState({ loginstate: true });
  //       this.setState({ loginMessage: "Giriş Başarılı" });
  //       console.log(this.state.loginstate);
  //     } else {
  //       this.setState({ loginstate: false });
  //       this.setState({
  //         loginMessage: "Giriş Başarısız. Lütfen tekrar deneyiniz.",
  //       });
  //       console.log(this.state.loginstate);
  //     }
  //   }
  // };

  /*<form>
                <h2>Kullanıcı Giriş</h2>
                <fieldset>
                  <legend>{this.state.loginMessage}</legend>
                  <ul>
                    <li>
                      <label for="username">Kullanıcı Adı:</label>
                      <input
                        type="text"
                        id="username"
                        required
                        value={this.state.username}
                        onChange={this.handleOnChangeUsername}
                      ></input>
                    </li>
                    <li>
                      <label for="username">Kullanıcı Şifresi:</label>
                      <input
                        type="password"
                        id="password"
                        required
                        value={this.state.password}
                        onChange={this.handleOnChangePassword}
                      ></input>
                    </li>
                  </ul>
                  <button onClick={this.CheckLogin}>Giriş</button>
                  <button
                    type="button"
                    onClick={() => this.gorunumDegistir("signUp")}
                  >
                    Hesabınız Yok mu?
                  </button>
                </fieldset>
              </form>*/
  //#endregion

  render() {
    //const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    // console.log(isUserLoggedIn);
    // const navigate = useNavigate();
    // navigate(`/mainpage`);
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
