import React from 'react';
import styles from './book.module.scss';

const Book = ({ book }) => {
	return (
		<div className={styles.root}>
			{console.log(book)}
			<img className={styles.image} />
			<h3 className={styles.title}>{book?.name}</h3>
			<p className={styles.author}>
				By :-{' '}
				{book.authors.length > 0
					? book.authors
							.reduce((acc, author) => {
								acc.push(author?.name);
								return acc;
							}, [])
							.join(', ')
					: null}
			</p>
		</div>
	);
};

export default Book;
