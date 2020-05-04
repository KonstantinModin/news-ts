import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from './redux/types';
import { getData } from './redux/actions';
import './App.css';
import Header from './Header';
import Form from './FormComponent';
import Content from './Content';


function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	const state = useSelector((s: GlobalState) => s);

	return (
		<div className="App">
			<Header />
			<Form />
			<Content />


		</div>
	);
}

export default App;
