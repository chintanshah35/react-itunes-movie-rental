import React from 'react';
import MovieList from './MovieList';
import Message from './Message';
import emitter from '../emitter';
import { getApiUrl } from '../utils';
import type { HeaderState, MainState } from '../type';

class Main extends React.PureComponent<{}, MainState> {
  state: MainState = {
    status: 'init',
    data: {}
  };

  async getSearchResult(headerState: HeaderState) {
    try {
      this.setState({ status: 'loading' });
      const resp = await fetch(getApiUrl(headerState));
      const json = await resp.json();
      this.setState({
        data: { ...json },
        status: json.resultCount ? '' : 'noContent'
      });
    } catch (e) {
      this.setState({ status: 'error' });
    }
  }

  componentDidMount() {
    emitter.on('search', this.getSearchResult.bind(this));
  }

  componentWillUnmount() {
    emitter.removeListener('search');
  }

  render() {
    const { status, data } = this.state;
    return (
      <div>
        {status.length ? <Message status={status} /> : <MovieList {...data} />}
      </div>
    );
  }
}

export default Main;
