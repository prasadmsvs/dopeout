import React from 'react';
import styles from './styles.module.scss';
function Card(props){
	return (
    <article className={`${styles.card} ${props.cn}`}>
		<h1>{props.heading}</h1>
		<p>{props.description}</p>
		<div className={styles.pin}></div>
	</article>
  )
}

export default Card;