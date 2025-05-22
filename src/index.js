import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import { BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import ReduxStore from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={ ReduxStore }>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </Provider>
);
