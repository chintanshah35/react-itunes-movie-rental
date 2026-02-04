import React from 'react';
import '../style/Message.css';

const msgMap = {
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

const Spinner = () => (
  <div className="loading-circle">
    {[...Array(12)].map((_, i) => (
      <div key={i} className={`loading-circle${i + 1} loading-child`} />
    ))}
  </div>
);

const Message = ({ status }) => (
  <div className="toast">
    {status === 'loading' ? <Spinner /> : <i className="material-icons">{msgMap[status].icon}</i>}
    <span className="text">{msgMap[status].msg}</span>
  </div>
);

export default Message;
