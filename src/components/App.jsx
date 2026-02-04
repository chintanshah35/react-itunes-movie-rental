import React, { useState, useCallback } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import Message from './Message';
import { getApiUrl } from '../utils';
import '../style/App.css';

const App = () => {
  const [status, setStatus] = useState('init');
  const [data, setData] = useState({});

  const handleSearch = useCallback(async (headerState) => {
    try {
      setStatus('loading');
      const resp = await fetch(getApiUrl(headerState));
      const json = await resp.json();
      setData(json);
      setStatus(json.resultCount ? '' : 'noContent');
    } catch (e) {
      setStatus('error');
    }
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div>
        {status.length ? <Message status={status} /> : <MovieList {...data} />}
      </div>
    </div>
  );
};

export default App;
