package com.test.springwithreact.Controllers;

import java.util.List;
import javax.transaction.Transactional;
import com.test.springwithreact.Repository.UserRepository;
import com.test.springwithreact.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
@Transactional
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("Hello")
    public String message() {
        return "Hello";
    }

    @RequestMapping(value = "/delete/user/{id}", method = { RequestMethod.DELETE, RequestMethod.GET })
    public String DeleteUser(@PathVariable Integer id) {
        try {
            if (userRepository.findById(id).equals(null)) {
                return "Nonexistent User";
            } else {
                userRepository.deleteById(id);
                return "User Deleted";
            }
        } catch (Exception e) {
            return e.getMessage();
        }

    }

    // @PostMapping("/new/{username}/{email}/{password}")
    @RequestMapping(value = "/new/{username}/{email}/{password}/{about}/{role}", method = { RequestMethod.POST,
            RequestMethod.GET })
    public String addNewUser(@PathVariable String username, @PathVariable String email, @PathVariable String password,
            @PathVariable String about, @PathVariable String role) {

        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);
        user.setAbout(about);
        user.setRole(role);

        try {

            this.userRepository.save(user);
            return "User Saved";
        } catch (Exception e) {
            return e.getMessage();
        }

    }
}