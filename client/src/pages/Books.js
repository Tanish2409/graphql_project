import { useQuery, gql } from '@apollo/client';
import React, { useEffect } from 'react';
import Book from '../components/Book';
import styles from './books.module.scss';

const GET_ALL_BOOKS = gql`
	query {
		books {
			id
			name
			authors {
				id
				name
			}
		}
	}
`;

const Books = () => {
	const { data, loading, error } = useQuery(GET_ALL_BOOKS);

	if (loading) {
		return <h1>Loading</h1>;
	}

	if (error) {
		return <h1>error</h1>;
	}

	return (
		<>
			<div className={styles.root}>
				{data.books.map((book) => {
					return <Book key={book.id} book={book} />;
				})}
			</div>
		</>
	);
};

export default Books;
