package com.test.springwithreact.Repository;

import java.util.Optional;

import javax.transaction.Transactional;

import com.test.springwithreact.models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    @Transactional
    void deleteById(Integer id);
}
