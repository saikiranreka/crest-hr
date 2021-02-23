package edu.vt.crest.hr.services;

import java.util.List;

import edu.vt.crest.hr.entity.DepartmentEntity;

/**
 * A DepartmentService defines the contract for a class that will provide
 * service access to database entities.
 */
public interface DepartmentService {

  /**
   * TODO - Implement this method
   * @param department the DepartmentEntity to create
   * @return the new DepartmentEntity
   */
  DepartmentEntity createDepartment(DepartmentEntity department);

  /**
   * TODO - Implement this method
   * @param id of the DepartmentEntity to return
   * @return the matching DepartmentEntity
   */
  DepartmentEntity findById(Long id);

  /**
   * TODO - Implement this method
   * @param startPosition the index of the first DepartmentEntity to return
   * @param maxResult the maximum number of DepartmentEntity(s) to return
   *                  beyond the startPosition
   * @return a list of DepartmentEntity(s)
   */
  List<DepartmentEntity> listAll(Integer startPosition, Integer maxResult);

  /**
   * TODO - Implement this method
   * @param id the id of the DepartmentEntity to update
   * @param department the entity used to update
   * @return the updated DepartmentEntity
   */
  DepartmentEntity update(Long id, DepartmentEntity department);
}