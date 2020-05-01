import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({
    data: [],
    loading: false,
    error: null
  })

  const url = 'https://newsapi.org/v2/top-headlines?q=trump&apiKey=9c84424f051843108bca2fea4726ae0c';
  const config = {
    method: 'GET'
  };

  const fetchData = async () => {
    setState(state => ({ ...state, loading: true }));
    try {
      const res = await fetch(url, config);
      const d = await res.json();
      console.log(d);
      setState(state => ({ ...state, loading: false, data: d }));

    } catch (error) {
      console.error('error');
      setState(state => ({ ...state, loading: false, data: [], error }));

    }
  }

  useEffect(() => {
    fetchData();

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
