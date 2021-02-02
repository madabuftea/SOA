package com.soa.login.dto;

import lombok.Data;

@Data
public class UserDto {

    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
