import React from 'react';
import styled from 'styled-components';

const HomePage = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<Text post={post} key={post.title}>
					{post.title} : {post.content}
				</Text>
			))}
		</div>
	);
};

export default HomePage;
// post를 꾸미세요
const Text = styled.p`
	border: 1px solid;
	padding: 5px;
`;
