class AuthenticationService {
  registerSuccessfullLogin(username, userRole) {
    console.log("Successfull login");
    sessionStorage.setItem("authenticatedUser", username);
    sessionStorage.setItem("userRole", userRole);
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
    sessionStorage.removeItem("userRole");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    return true;
  }

  getLoggedInName() {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return "";
    return user;
  }

  getUserRole() {
    let userRole = sessionStorage.getItem("userRole");
    if (userRole === null) return "";
    return userRole;
  }
}

export default new AuthenticationService();
