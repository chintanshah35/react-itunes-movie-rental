import React, { PropTypes } from 'react';
import { getKind, kindColorMap } from '../utils';
import type { SearchResult } from '../type';
import '../style/MovieCard.css';

const MovieCard = (props: SearchResult) => (
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image">
        <img
          alt="img"
          className=""
          src={props.artworkUrl100.replace('100x100', '1200x1200')}
        />
      </div>
      <div className="card-content">
        <span className="card-title  grey-text text-darken-4">{props.trackName || props.collectionName}</span>
        <p>{props.longDescription || props.description || 'No description.'}</p>
        <p>
          <a target="_blank" href={props.trackViewUrl || props.collectionViewUrl}>
            more
          </a>
          <p className={`right kind white-text bg-dark`}>Rent: ${props.trackPrice}</p>

        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.trackName || props.collectionName}<i className="material-icons right">close</i></span>
        <p>{props.longDescription || props.description || 'No description.'}</p>
      </div>
    </div>
  </div>
);

export default MovieCard;
