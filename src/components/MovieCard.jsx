import React from 'react';
import '../style/MovieCard.css';

const MovieCard = (props) => (
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image">
        <img
          alt={props.trackName || props.collectionName}
          className=""
          src={props.artworkUrl100?.replace('100x100', '1200x1200') || props.artworkUrl100}
        />
      </div>
      <div className="card-content">
        <span className="card-title grey-text text-darken-4">
          {props.trackName || props.collectionName}
        </span>
        <p>{props.longDescription || props.description || 'No description.'}</p>
        <p>
          <a 
            target="_blank" 
            rel="noopener noreferrer" 
            href={props.trackViewUrl || props.collectionViewUrl}
          >
            more
          </a>
          {props.trackPrice && (
            <p className="right kind white-text bg-dark">
              ${props.trackPrice}
            </p>
          )}
          {props.collectionPrice && !props.trackPrice && (
            <p className="right kind white-text bg-dark">
              ${props.collectionPrice}
            </p>
          )}
        </p>
      </div>
    </div>
  </div>
);

export default MovieCard;
