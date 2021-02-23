package edu.vt.crest.hr.rest;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import edu.vt.crest.hr.entity.EmployeeEntity;
import edu.vt.crest.hr.services.EmployeeService;

/**
 * Serves as a RESTful endpoint for manipulating EmployeeEntity(s)
 */
@Stateless
@Path("/employees")
public class EmployeeResource {

	//Used to interact with EmployeeEntity(s)
	@Inject
	EmployeeService employeeService;

	/**
	 * TODO - Implement this method
	 * @param employee the EmployeeEntity to create
	 * @return a Response containing the new EmployeeEntity
	 */
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response create(EmployeeEntity employee) {
		return null;
	}

	/**
	 * TODO - Implement this method
	 * @param id of the EmployeeEntity to return
	 * @return a Response containing the matching EmployeeEntity
	 */
	@GET
	@Path("/{id:[0-9][0-9]*}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findById(@PathParam("id") Long id) {
		return null;
	}

	/**
	 * TODO - Implement this method
	 * @param startPosition the index of the first EmployeeEntity to return
	 * @param maxResult the maximum number of EmployeeEntity(s) to return
	 *                  beyond the startPosition
	 * @return a list of EmployeeEntity(s)
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<EmployeeEntity> listAll(@QueryParam("start") Integer startPosition,
			@QueryParam("max") Integer maxResult) {

		return null;
	}

	/**
	 * TODO - Implement this method
	 * @param id the id of the EmployeeEntity to update
	 * @param employee the entity used to update
	 * @return a Response containing the updated EmployeeEntity
	 */
	@PUT
	@Path("/{id:[0-9][0-9]*}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("id") Long id, EmployeeEntity employee) {
		return null;
	}
}
