import React, { useRef } from 'react';
import { XR, ARButton, useHitTest } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

const modelUrl = '/reticle.gltf';

const Reticle = () => {
	const ref = useRef(null);
	const gltf = useGLTF(modelUrl, true);
	useHitTest((hitTestMatrix) => {
		if (ref.current) {
			ref.current.matrixAutoUpdate = false;
			ref.current.matrix = hitTestMatrix;
		}
	});
	return <primitive object={gltf.scene} ref={ref} />;
};

const App = () => {
	const navigate = useNavigate();
	const onEnd = () => navigate('/');
	return (
		<>
			<ARButton sessionInit={{ requriedFeatures: ['local', 'hit-test'] }} />
			<Canvas>
				<XR onSessionEnd={onEnd}>
					<Reticle />
				</XR>
			</Canvas>
		</>
	);
};

export default App;
