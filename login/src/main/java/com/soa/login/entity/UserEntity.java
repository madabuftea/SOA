package com.soa.login.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "USERS", schema = "users")
@Data
@SequenceGenerator(name="UserSeq", sequenceName = "SEQ_USER", allocationSize = 1)
public class UserEntity {

    public static final String USER_ID = "USER_ID";
    public static final String FIRST_NAME = "FIRST_NAME";
    public static final String LAST_NAME = "LAST_NAME";
    public static final String EMAIL = "EMAIL";
    public static final String PASSWORD = "PASSWORD";

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "UserSeq")
    @Column(name = USER_ID)
    private Long userId;

    @Column(name=FIRST_NAME)
    private String firstName;

    @Column(name=LAST_NAME)
    private String lastName;

    @Column(name=EMAIL)
    private String email;

    @Column(name=PASSWORD)
    private String password;


}
