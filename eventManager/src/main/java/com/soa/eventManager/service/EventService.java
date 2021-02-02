package com.soa.eventManager.service;

import com.soa.eventManager.repository.EventRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class EventService {

    @Autowired
    private EventRepository eventRepository;

}
