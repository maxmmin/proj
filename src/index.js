import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.scss';
import Navpanel from './Navpanel/Navpanel'


ReactDOM.render(
  <React.StrictMode>
    <Navpanel />
  </React.StrictMode>,
  document.querySelector('.wrapper')
);


