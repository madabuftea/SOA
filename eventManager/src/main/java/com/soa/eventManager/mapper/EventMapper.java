package com.soa.eventManager.mapper;

import com.soa.eventManager.dto.EventDto;
import com.soa.eventManager.entity.EventEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface EventMapper {

    EventDto Entity2Dto(EventEntity dao);

    EventEntity Dto2Entity(EventDto dto);

    List<EventDto> EntityList2DtoList(List<EventEntity> daos);
}

