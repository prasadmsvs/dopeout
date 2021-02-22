package com.dopeout.dopeoutmain.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.dopeout.dopeoutmain.entity.Project;

@Repository
public class ProjectDAOImpl implements ProjectDAO {
	
	private EntityManager entityManager;
	
	@Autowired
	public ProjectDAOImpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	public List<Project> findAll() {
		
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Project> theQuery = currentSession.createQuery("from Project", Project.class);
		List<Project> projects = theQuery.getResultList();
		return projects;
	}

	@Override
	public Project findOne(String id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Project project = currentSession.get(Project.class, id);
		return project;
	}

	@Override
	public void save(Project project) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(project);
	}

}
