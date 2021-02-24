import React, {useEffect, useState} from 'react';
import Card from './../Card';
import styles from './styles.module.scss';
import { getList } from './../../services/projectsapi';
function Projects(){
	const [list, setList] = useState([]);

	useEffect(()=>{
		getList().then(projects=>{
			setList(projects);
		})
	},[])
	return(
		<div className={styles.grid}>
			{list.map((project, index)=>{
				return <Card cardIndex={index%5+1} cn={styles[`card${(index)%5+1}`]} key={project.id} heading={project.name} description={project.description} />
			})}
			
		</div>
	);
}

export default Projects;