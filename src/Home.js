import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
	<ul>
		<li>
			<Link to="/working">Working example</Link>
		</li>
		<li>
			<Link to="/apply-matrix">applyMatrix4 example</Link>
		</li>
		<li>
			<Link to="/decompose">decompose example</Link>
		</li>
	</ul>
);

export default Home;
