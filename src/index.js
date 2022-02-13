import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.scss';
import Navpanel from './Navpanel/Navpanel'
import Fastnav from './Fastnav/Fastnav';
import Main from './Main/Main';
import Aside from './AddAside/AddAside';


ReactDOM.render(
  <React.StrictMode>
    <Fastnav />
    <Navpanel />
    <Main />
    <Aside />
  </React.StrictMode>,
  document.querySelector('.wrapper')
);


