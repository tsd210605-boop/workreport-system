package com.example.workreport.repository;

import com.example.workreport.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String>{

    User findByUsernameAndPassword(String username, String password);

}