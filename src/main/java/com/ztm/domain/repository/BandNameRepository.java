package com.ztm.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.ztm.domain.model.Band;

@RepositoryRestResource(collectionResourceRel = "band", path = "band")
public interface BandNameRepository extends JpaRepository<Band, Long> {

	List<Band> findByNameContainingIgnoreCase(@Param("name") String name);
	
}
