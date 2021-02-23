package edu.vt.crest.hr.services;

import java.util.List;
import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.OptimisticLockException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import edu.vt.crest.hr.entity.DepartmentEntity;
import edu.vt.crest.hr.entity.EmployeeEntity;

/**
 * Implements a DepartmentService
 */
@ApplicationScoped
public class DepartmentServiceBean implements DepartmentService {

  @PersistenceContext
  private EntityManager em;

  /**
   * {@inheritDoc}
   */
  @Override
  public DepartmentEntity createDepartment(DepartmentEntity department) {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public DepartmentEntity findById(Long id) {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public List<DepartmentEntity> listAll(Integer startPosition, Integer maxResult) {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public DepartmentEntity update(Long id, DepartmentEntity department) throws OptimisticLockException {
    return null;
  }

}
