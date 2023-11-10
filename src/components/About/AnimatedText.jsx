import React from 'react';
import Typewriter from 'typewriter-effect';

// STYLING
import './About.css';

const AnimatedText = () => {
	return (
		<>
			<div className="animatedText">
				<Typewriter
					options={{
						strings: [
							'an Ecologist',
							'a Documentarian',
							'a Naturalist',
							'a Sassy Pants',
						],
						autoStart: true,
						loop: true,
					}}
				/>
			</div>
		</>
	);
};

export default AnimatedText;
