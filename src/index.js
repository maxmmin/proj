import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.scss';
import Navpanel from './Navpanel/Navpanel'
import Fastnav from './Fastnav/Fastnav';
import Main from './Main/Main';
import Aside from './AddAside/AddAside';
import { BrowserRouter } from 'react-router-dom';
import Modal from './Modal/modal';
import {useModal, ModalProvider} from './Modal/modalContext'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ModalProvider>
    <Fastnav />
    <Navpanel />
    <Main />
    <Aside />
    <Modal />
    </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('.wrapper')
);




