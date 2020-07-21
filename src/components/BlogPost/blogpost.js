import React from 'react';
import { Link } from "gatsby"

import styles from "./blogpost.module.scss"


const BlogPost = (props) => {
	return (
		<article key={props.key} className={styles.post}>
			<time dateTime={props.date} className={styles.date}>
				<hgroup className={styles.dateText}>
					<h2>{props.day}</h2>
					<h3>{props.month}</h3>
				</hgroup>
			</time>
			<h1><Link to={props.postLink}>{props.postTitle}</Link></h1>
			<p className={styles.excerpt}>{props.postExcerpt}</p>
		</article>
	);
};

export default BlogPost;
