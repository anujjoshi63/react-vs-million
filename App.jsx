import React, { useState } from 'react';

function App() {
	const [list, setList] = useState([]);
	// const [time, setTime] = useState(new Date());

	const handle100K = () => {
		const newArray = new Array(100_000).fill(0).map((_, i) => i);
		setList(newArray);
	};
	const handle1M = () => {
		const newArray = new Array(1_000_000).fill(0).map((_, i) => i);
		setList(newArray);
	};

	let time = null;

	function getTime() {
		time = new Date();
	}

	return (
		<>
			{getTime()}
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap'
				}}
			>
				{list.map(item => {
					const nowTime = new Date();
					const diff = nowTime - time;
					return <h3 key={Math.random()}>&nbsp;{diff}&nbsp;</h3>;
				})}
			</div>
			<button onClick={handle100K}>Click me to render 100K items</button>
			<button onClick={handle1M}>Click me to render 1M items</button>
		</>
	);
}

export default App;
