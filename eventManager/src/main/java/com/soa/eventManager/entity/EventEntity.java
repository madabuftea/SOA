package com.soa.eventManager.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="EVENTS", schema="events")
@Data
@SequenceGenerator(name = "EventSeq", sequenceName = "SEQ_EVENT", allocationSize = 1)
public class EventEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "EventSeq")
    @Column(name = "EVENT_ID")
    private Long eventId;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "DATE")
    private String date;

    @Column(name = "USER_ID")
    private Long userId;

}
