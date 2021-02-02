package com.soa.eventManager.repository;

import com.soa.eventManager.dto.EventDto;
import com.soa.eventManager.entity.EventEntity;
import com.soa.eventManager.mapper.EventMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class EventRepository {
    private EventJpaRepository eventJpaRepository;
    private EventMapper eventMapper;

    @Autowired
    public EventRepository(final EventJpaRepository eventJpaRepository, final EventMapper eventMapper) {
        this.eventJpaRepository = eventJpaRepository;
        this.eventMapper = eventMapper;
    }

    public EventDto save(final EventDto clientToSave){
        EventEntity savedEvent = eventJpaRepository.save(eventMapper.Dto2Entity(clientToSave));
        return eventMapper.Entity2Dto(savedEvent);
    }
    public EventDto findOne(final Long id){
        EventEntity eventEntity = eventJpaRepository.getOne(id);
        return eventMapper.Entity2Dto(eventEntity);
    }

    public List<EventDto> findAll(){
        List<EventEntity> allEvents = eventJpaRepository.findAll();
        return eventMapper.EntityList2DtoList(allEvents);
    }

    public List<EventDto> findByUserId(final Long id) {
        List<EventEntity> events = eventJpaRepository.findByUserId(id);
        return eventMapper.EntityList2DtoList(events);
    }

    public void delete(final EventDto eventDto)  {
        eventJpaRepository.delete(eventMapper.Dto2Entity(eventDto));
    }
}
