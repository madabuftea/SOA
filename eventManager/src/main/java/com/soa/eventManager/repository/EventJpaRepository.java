package com.soa.eventManager.repository;

import com.soa.eventManager.entity.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventJpaRepository extends JpaRepository<EventEntity, Long> {
    List<EventEntity> findByEventId(Long lawyerId);
   // List<EventEntity> findAll(Long lawyerId);
    List<EventEntity> findByUserId(Long clientId);
}
