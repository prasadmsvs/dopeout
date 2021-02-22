package com.dopeout.dopeoutmain.rest;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dopeout.dopeoutmain.entity.Project;
import com.dopeout.dopeoutmain.service.ProjectService;

@RestController
@RequestMapping("/api")
public class ProjectRestController {
	ProjectService projectService;
	
	public ProjectRestController(ProjectService theprojectRestService){
		projectService = theprojectRestService;
	}
	
	@GetMapping("projects")
	public List<Project> findAll(){
		return projectService.findAll();
	}
	
	@GetMapping("projects/:id")
	public Project findOne(@PathVariable String id) {
		return projectService.findOne(id);
	}
}
