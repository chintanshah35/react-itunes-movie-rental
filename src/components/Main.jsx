import React, { useState, useCallback } from 'react';
import MovieList from './MovieList';
import Message from './Message';
import { getApiUrl } from '../utils';

const Main = () => {
  const [status, setStatus] = useState('init');
  const [data, setData] = useState({});

  const getSearchResult = useCallback(async (headerState) => {
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
      {status.length ? <Message status={status} /> : <MovieList {...data} />}
    </div>
  );
};

export default Main;
