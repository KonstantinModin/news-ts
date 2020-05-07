import React, { useEffect, useState } from 'react';
import { getData } from './redux/actions';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

const App: React.FC<{}> = () => {
	const [scroll, setScroll] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	const scrollHandler = () => {
		const scrollY = window.scrollY;
		setScroll(scrollY);
		console.log(scrollY);
	}

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, [])

	return (
		<div className="App">
			<Header show={scroll < 500} />
			<Content />
			<Footer />
		</div>
	);
}

export default App;