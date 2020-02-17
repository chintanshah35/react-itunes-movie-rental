import React, { PropTypes } from 'react';
import '../style/Message.css';

const msgMap: Object = {
  init: {
    icon: 'ondemand_video',
    msg: 'Welcome back!'
  },
  loading: {
    msg: 'Loading...'
  },
  noContent: {
    icon: 'info',
    msg: 'No match'
  },
  error: {
    icon: 'error',
    msg: 'Error!'
  }
};

const spinner = _ => (
  <div className="loading-circle">
    <div className="loading-circle1 loading-child" />
    <div className="loading-circle2 loading-child" />
    <div className="loading-circle3 loading-child" />
    <div className="loading-circle4 loading-child" />
    <div className="loading-circle5 loading-child" />
    <div className="loading-circle6 loading-child" />
    <div className="loading-circle7 loading-child" />
    <div className="loading-circle8 loading-child" />
    <div className="loading-circle9 loading-child" />
    <div className="loading-circle10 loading-child" />
    <div className="loading-circle11 loading-child" />
    <div className="loading-circle12 loading-child" />
  </div>
);

const Message = ({ status }: { status: string }) => (
  <div className="toast">
    {status === 'loading' ? spinner() : <i className="material-icons">{msgMap[status].icon}</i>}
    <span className="text">{msgMap[status].msg}</span>
  </div>
);

export default Message;
