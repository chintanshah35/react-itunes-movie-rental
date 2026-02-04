import React, { useState, useCallback, useRef, useEffect } from 'react';
import '../style/Header.css';

const Header = ({ onSearch }) => {
  const [media, setMedia] = useState('Movie');
  const [query, setQuery] = useState('');
  const rafRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const emitSearch = useCallback(() => {
    if (onSearch && query.length) {
      onSearch({ media, query });
    }
  }, [media, query, onSearch]);

  const handleKeyUp = useCallback((e) => {
    const { keyCode, target: { value } } = e;
    
    if (!tickingRef.current) {
      rafRef.current = window.requestAnimationFrame(() => {
        setQuery(value);
        if (keyCode === 13 && value.length && onSearch) {
          onSearch({ media, query: value });
        }
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }, [media, onSearch]);

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper bg-dark">
          <span className="ims-title">iTunes Movie Search</span>
          <div className="header-search-wrapper">
            <i className="material-icons black-text">search</i>
            <input
              type="text"
              placeholder="Search"
              onKeyUp={handleKeyUp}
              className="search-input white black-text"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
