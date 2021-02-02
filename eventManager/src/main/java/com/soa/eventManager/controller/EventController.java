package com.soa.eventManager.controller;

import com.soa.eventManager.dto.EventDto;
import com.soa.eventManager.repository.EventRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@CrossOrigin
public class EventController {

    @Autowired
    private EventRepository eventService;

    public EventController(final EventRepository c) {
        this.eventService = c;
    }

    @PostMapping("/addEvent")
    public ResponseEntity<EventDto> addEvent(@RequestBody EventDto eventDto) {
        EventDto c = eventService.save(eventDto);
        log.info("event" + c);
        return new ResponseEntity<>(c, HttpStatus.OK);
    }

    @PostMapping("/event")
    public ResponseEntity<EventDto> getEvent(@RequestBody Long id) {
        EventDto eventDto = eventService.findOne(id);
        log.info("event" + eventDto);
        if (eventDto !=null) {
            log.info("event: " + eventDto);
            return new ResponseEntity<>(eventDto, HttpStatus.OK);
        } else {
            log.error("No event found.");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/deleteEvent")
    public ResponseEntity<List<EventDto>> deleteEvent(@RequestBody EventDto eventDto){
        try{
            this.eventService.delete(eventDto);
            List<EventDto> eventDtos = eventService.findByUserId(Long.valueOf(eventDto.getUserId()));

            return new ResponseEntity<>(eventDtos,HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/userEvents" + "/{id}")
    public ResponseEntity<List<EventDto>> getEventsByUser(@PathVariable("id") Long id) {
        List<EventDto> eventDtoList = eventService.findByUserId(id);
        log.info("events by user id " + eventDtoList);
        if (eventDtoList !=null) {
            log.info("events by user id " + eventDtoList);
            return new ResponseEntity<>(eventDtoList, HttpStatus.OK);
        } else {
            log.error("No event found.");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/allEvents")
    public ResponseEntity<List<EventDto>> getAllEvents() {
        List<EventDto> events = eventService.findAll();

        if (!events.isEmpty()) {
            log.info("All events: " + events.size());
            return new ResponseEntity<>(events, HttpStatus.OK);
        } else {
            log.error("No events found.");
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}