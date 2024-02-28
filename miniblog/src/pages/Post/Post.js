import React from 'react'
import styles from './Post.module.css';

//hooks
import {useParams} from 'react-router-dom';
import {useFetchDocument} from '../../hooks/useFetchDocument';

const Post = () => {
	const {id} = useParams();
	const {document, loading} = useFetchDocument('posts', id)

	return (
		<div>
			{loading && <p>Carregando post...</p>}
			<h1>
				{document && (
					<>
						<h1>
							{document.title}
						</h1>
					</>
				)}
			</h1>
		</div>
	)
};

export default Post;