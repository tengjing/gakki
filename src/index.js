
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import SiderDemo from "./Navi/Navi";

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<SiderDemo/>,document.getElementById("root"));

serviceWorker.unregister();
