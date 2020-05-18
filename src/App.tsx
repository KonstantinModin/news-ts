import React, { useEffect, useState } from 'react';
import { getData } from './redux/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './index';
import { ThunkAction } from "redux-thunk";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

const App: React.FC<{}> = () => {
	const [scroll, setScroll] = useState(0);

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch<ThunkAction>(getData());
	}, [dispatch]);

	const scrollHandler = () => {
		const scrollY = window.scrollY;
		setScroll(scrollY);
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [])

	return (
		<div className="App">
			<Header show={scroll < 400} />
			<Content />
			<Footer />
		</div>
	);
}

export default App;