package com.soa.login.helpers.mapper;

import com.soa.login.dto.UserDto;
import com.soa.login.entity.UserEntity;
import org.mapstruct.Mapper;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto Entity2Dto(UserEntity dao);

    UserEntity Dto2Entity(UserDto dto);
    
    List<UserDto> EntityList2DtoList(List<UserEntity> daos);


}