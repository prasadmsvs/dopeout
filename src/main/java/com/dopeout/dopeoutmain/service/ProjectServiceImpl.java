package com.dopeout.dopeoutmain.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.dopeout.dopeoutmain.dao.ProjectDAO;
import com.dopeout.dopeoutmain.entity.Project;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	private ProjectDAO projectDAO;
	
	public ProjectServiceImpl(ProjectDAO theProjectDAO) {
		projectDAO = theProjectDAO;
	}
	@Override
	public List<Project> findAll() {
		return projectDAO.findAll();
	}

	@Override
	public Project findOne(String id) {
		return projectDAO.findOne(id);
	}

	@Override
	public void save(Project project) {
		projectDAO.save(project);
	}

}
