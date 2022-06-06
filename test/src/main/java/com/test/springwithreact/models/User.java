package com.test.springwithreact.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer Id;

    @NotBlank
    @Column(name = "username")
    @Size(max = 50)
    private String username;

    @NotBlank
    @Column(name = "password")
    @Size(max = 50)
    private String password;

    @Column(name = "email")
    @Size(max = 50)
    @Email
    private String email;

    @Column(name = "about")
    @Size(max = 250)
    private String about;

    @Column(name = "profilepic")
    @Size(max = 100)
    private String profilepic;

    @Column(name = "role")
    // @OneToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "RoleName")
    private String role;

    public User() {

    }

    public User(Integer id, String username, String password, String email, String about, String profilepic,
            String role) {
        this.Id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.about = about;
        this.profilepic = profilepic;
        this.role = role;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getProfilepic() {
        return profilepic;
    }

    public void setProfilepic(String profilepic) {
        this.profilepic = profilepic;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}
