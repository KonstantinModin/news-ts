import React, { useEffect } from 'react';
import { getData } from './redux/actions';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Form from './FormComponent';
import Content from './Content';
import './App.css';

const App: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<div className="App">
			<Header />
			<Form />
			<Content />
		</div>
	);
}

export default App;