package com.soa.login.repository;

import com.soa.login.dto.UserDto;
import com.soa.login.entity.UserEntity;
import com.soa.login.helpers.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class UserRepository {

    private UserJpaRepository userJpaRepository;
    private UserMapper userMapper;

    @Autowired
    public UserRepository(final UserJpaRepository userJpaRepository, final UserMapper userMapper) {
        this.userJpaRepository = userJpaRepository;
        this.userMapper = userMapper;
    }

    public UserDto getUserById(final Long id){
        UserEntity dao = userJpaRepository.getOne(id);
        return userMapper.Entity2Dto(dao);
    }

    public UserDto save(final UserDto clientToSave){
        UserEntity savedClient = userJpaRepository.save(userMapper.Dto2Entity(clientToSave));
        return userMapper.Entity2Dto(savedClient);
    }

    public List<UserDto> findAll(){
        List<UserEntity> allClients = userJpaRepository.findAll();
        return userMapper.EntityList2DtoList(allClients);
    }

    public UserDto findByEmail(final String email){
        UserEntity user = userJpaRepository.findByEmail(email);
        return userMapper.Entity2Dto(user);
    }
}
