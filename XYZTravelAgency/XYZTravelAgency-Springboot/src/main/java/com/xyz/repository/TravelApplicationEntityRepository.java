package com.xyz.repository;

import com.xyz.entity.TravelApplicationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TravelApplicationEntityRepository extends JpaRepository<TravelApplicationEntity, Long> {

    List<TravelApplicationEntity> findByCreatedByOrderByModifiedAtDesc(String userName);
}
