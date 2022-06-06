import React, { Component } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
} from "semantic-ui-react";
import "../css/Users.css";
import apiCalls from "../api/apiCalls";
import Navigation from "../components/Navigation";

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userRole: "",
    };
  }

  async componentDidMount() {
    try {
      apiCalls
        .getUsers()
        .then((response) => {
          this.setState({ users: response.data });
          console.log(this.state.users);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }

  deleteUser = (id) => {
    try {
      apiCalls.deleteUser(id).then((response) => {
        console.log(response);
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div class="Body">
        <Navigation />
        <Container className="Container" textAlign="justified">
          <div>
            <Card>
              <CardContent className="Content">
                <CardHeader>Kullanıcı:|Kullanıcı Adı|</CardHeader>
                <Card.Meta>
                  <span className="date">
                    Kayıt Tarihi:|Kullanıcı Kayıt Tarihi|
                  </span>
                </Card.Meta>
                <Card.Description>
                  Hakkımda:|Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Praesent fringilla ornare arcu, ac sollicitudin urna
                  efficitur a. Sed at ante turpis. Donec sapien erat, tincidunt
                  in nibh eu, iaculis posuere ante. Integer finibus pretium
                  ipsum quis porttitor. Morbi imperdiet consectetur lorem non
                  sodales. Sed aliquam elit nec nulla dignissim tempor. Duis sed
                  sapien et ante tempus malesuada.|
                </Card.Description>

                <Button basic color="green">
                  Düzenle
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
        <Container className="Container" textAlign="justified">
          <h4 style={{ textAlign: "center", color: "white" }}> Users List</h4>
          <table
            style={{ color: "white", width: "100%" }}
            class="striped bordered hover"
            size="sm"
          >
            <thead>
              <tr>
                <td>User ID</td>
                <td> User Name</td>
                <td> User Password</td>
                <td> User Email</td>
                <td> Düzenle</td>
                <td> Sil</td>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td> {user.username}</td>
                  <td> {user.password}</td>
                  <td> {user.email}</td>
                  <td>
                    <Button primary>Düzenle</Button>
                  </td>
                  <td>
                    <Button
                      primary
                      onClick={() => {
                        this.deleteUser(user.id);
                      }}
                      method="delete"
                    >
                      Sil
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </div>
    );
  }
}

export default UserPage;
