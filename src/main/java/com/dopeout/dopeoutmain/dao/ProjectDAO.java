package com.dopeout.dopeoutmain.dao;

import java.util.List;

import com.dopeout.dopeoutmain.entity.Project;

public interface ProjectDAO {
	public List<Project> findAll();
	public Project findOne(String id);
	public void save(Project project);
}
