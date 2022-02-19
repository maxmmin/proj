import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.scss';
import Navpanel from './Navpanel/Navpanel'
import Fastnav from './Fastnav/Fastnav';
import Main from './Main/Main';
import Aside from './AddAside/AddAside';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Fastnav />
    <Navpanel />
    <Main />
    <Aside />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('.wrapper')
);




