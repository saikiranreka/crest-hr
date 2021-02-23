package edu.vt.crest.hr.services;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.OptimisticLockException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import edu.vt.crest.hr.entity.EmployeeEntity;

/**
 * Implements an EmployeeService
 */
@ApplicationScoped
public class EmployeeServiceBean implements EmployeeService {

  @PersistenceContext
  private EntityManager em;

  /**
   * {@inheritDoc}
   */
  @Override
  public EmployeeEntity createEmployee(EmployeeEntity employee) {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public EmployeeEntity findById(Long id) {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public List<EmployeeEntity> listAll(Integer startPosition, Integer maxResult) {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  @Override
  public EmployeeEntity update(Long id, EmployeeEntity employee) throws OptimisticLockException {
    return null;
  }
}
