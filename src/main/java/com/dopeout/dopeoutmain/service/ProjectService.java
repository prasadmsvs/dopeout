package com.dopeout.dopeoutmain.service;

import java.util.List;

import com.dopeout.dopeoutmain.entity.Project;

public interface ProjectService {
	public List<Project> findAll();
	public Project findOne(String id);
	public void save(Project project);
}
