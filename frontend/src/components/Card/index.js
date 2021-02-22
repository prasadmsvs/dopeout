import React from 'react';
import './styles.scss';
function Card(props){
	return (
    <article className="card">
		<h1>{props.heading}</h1>
		<p>{props.description}</p>
	</article>
  )
}

export default Card;