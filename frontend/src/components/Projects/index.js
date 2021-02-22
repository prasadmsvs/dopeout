import React from 'react';
import Card from './../Card';
import './styles.scss';
function Projects(){
	return(
		<div className="grid">
			<Card heading="heading" description="description" />
			<Card heading="heading" description="description" />
			<Card heading="heading" description="description" />
			<Card heading="heading" description="description" />
			<Card heading="heading" description="description" />
			<Card heading="heading" description="description" />
		</div>
	);
}

export default Projects;