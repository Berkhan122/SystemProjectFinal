import React from "react";
import { Dropdown } from "react-bootstrap";
import { GiAbstract104 } from "react-icons/gi";
import { Button } from "semantic-ui-react";
import AuthenticationService from "../api/AuthenticationService";

function Navigation() {
  const tf = AuthenticationService.isUserLoggedIn();
  console.log(tf);

  const logout = () => {
    AuthenticationService.logout();
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <GiAbstract104 />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Ana Sayfa
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/content">
                İçerik
              </a>
            </li>
          </ul>

          <Dropdown>
            <Dropdown.Toggle class="dropdown-basic">Kullanıcı</Dropdown.Toggle>
            <Dropdown.Menu>
              {/* {!AuthenticationService.isUserLoggedIn && (
                <Dropdown.Item href="/login">Giriş</Dropdown.Item>
              )} */}
              <Dropdown.Item href="/login">Giriş</Dropdown.Item>
              <div class="dropdown-divider"></div>
              <Dropdown.Item href="/register">Kayıt Ol</Dropdown.Item>
              <div class="dropdown-divider"></div>
              <Dropdown.Item href="/userpage">Sayfası</Dropdown.Item>
              <div class="dropdown-divider"></div>
              {AuthenticationService.isUserLoggedIn && (
                <Dropdown.Item
                  as="button"
                  onClick={AuthenticationService.logout}
                >
                  Çıkış Yap
                </Dropdown.Item>
              )}
              {AuthenticationService.getUserRole === "admin" && (
                <Dropdown.Item href="/managerpage">Yönetici</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
