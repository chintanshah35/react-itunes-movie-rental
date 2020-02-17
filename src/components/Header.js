import React from 'react';
import emitter from '../emitter';
import type { HeaderState, SearchOption } from '../type';
import '../style/Header.css';

class Header extends React.PureComponent<{}, HeaderState> {
  emitSearch: () => void;
  _onKeyUp: (e: Object) => void;
  _onClick: (e: Object) => void;
  _update: (e: Object) => Function;
  ticking: boolean;
  rAf: any;

  state: HeaderState = {
    media: 'Movie',
    query: ''
  };

  constructor(props: Object) {
    super(props);
    this.ticking = false;
    this.rAf = null;
    this.emitSearch = () => emitter.emit('search', this.state);
    this._onClick = e => this.setState(
      { media: e.target.textContent },
      () => (this.state.query.length ? this.emitSearch() : null)
    );
    this._update = ({ keyCode, target: { value: query } }) => _ => {
      this.setState({ query }, () => keyCode === 13 && this.emitSearch());
      this.ticking = false;
    };
    this._onKeyUp = e => {
      if (!this.ticking) {
        this.rAf = window.requestAnimationFrame(this._update(e));
        this.ticking = true;
      }
    };
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.rAf);
  }

  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper bg-dark">
          <span className ="ims-title">Itunes Movie Search</span>
            <div className="header-search-wrapper">
              <i className="material-icons black-text">search</i>
              <input
                type="text"
                placeholder="Search"
                onKeyUp={this._onKeyUp}
                className="search-input white black-text"
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
