package com.dopeout.dopeoutmain.dao;

import java.util.List;

import com.dopeout.dopeoutmain.entity.Employee;

public interface EmployeeDAO {
	public List<Employee> findAll();
	
	public Employee findById(int id);
	
	public void save(Employee theEmployee);
	
	public void deleteById(int id);
}
