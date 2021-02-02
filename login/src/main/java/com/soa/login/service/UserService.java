package com.soa.login.service;

import com.soa.login.config.AuthenticationRequest;
import com.soa.login.dto.UserDto;
import com.soa.login.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public UserDto getUser(AuthenticationRequest auth){
        return userRepository.findByEmail(auth.getEmail());
    }
    public UserDto getUserById(Long id) {
        return userRepository.getUserById(id);
    }

    public UserDto getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<UserDto> getAll() {
        return userRepository.findAll();
    }

}
