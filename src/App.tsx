import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import axios from 'axios';

function App() {
	// const [state, setState] = useState({
	// 	data: [],
	// 	loading: false,
	// 	error: null
	// })

	// const url = 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=9c84424f051843108bca2fea4726ae0c';
	// const config = {
	// 	method: 'GET'
	// };

	// const fetchData = async () => {
	// 	setState(state => ({ ...state, loading: true }));
	// 	try {
	// 		const d = await axios.get(url);
	// 		// const d = await res.json();
	// 		console.log(d);
	// 		setState(state => ({ ...state, loading: false, data: d.data.articles }));

	// 	} catch (error) {
	// 		console.error('error');
	// 		setState(state => ({ ...state, loading: false, data: [], error }));

	// 	}
	// }

	// useEffect(() => {
	// 	fetchData();

	// }, [])

	const state = useSelector(s => s);

	console.log(state);

	return (
		<div className="App">
			<header className="App-header">
				op
      </header>
		</div>
	);
}

export default App;
