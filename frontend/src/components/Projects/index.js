import React, {useEffect, useState} from 'react';
import Card from './../Card';
import './styles.scss';
import { getList } from './../../services/projectsapi';
function Projects(){
	const [list, setList] = useState([]);

	useEffect(()=>{
		getList().then(projects=>{
			setList(projects);
		})
	},[])
	return(
		<div className="grid">
			{list.map((project)=>{
				return <Card key={project.id} heading={project.name} description={project.description} />
			})}
			
		</div>
	);
}

export default Projects;