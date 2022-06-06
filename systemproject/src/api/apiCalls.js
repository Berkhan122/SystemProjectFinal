import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/api";
var config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
};
class UserService {
  login(username, password) {
    return axios
      .post(USERS_REST_API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, password, email) {
    return axios.post(USERS_REST_API_URL + "signup", {
      username,
      password,
      email,
    });
  }

  getHelloMessage() {
    return axios.get(USERS_REST_API_URL, "Hello");
  }

  getUsers() {
    return axios.get("/users", config);
  }

  deleteUser(id) {
    return axios.delete(USERS_REST_API_URL + "/delete/user/" + id, config);
  }

  addUser(username, email, password, about, role) {
    return axios.post(
      USERS_REST_API_URL +
        "/new" +
        "/" +
        username +
        "/" +
        email +
        "/" +
        password +
        "/" +
        about +
        "/" +
        role,
      config
    );
  }
}

export default new UserService();

/*
New User Post method 

Delete User Delete method

Edit/Update User Put method

Retrieve All Users Get method
*/
