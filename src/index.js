import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Root from './views/Root/Root';
import configureStore from './data/store';

const store = configureStore();


ReactDOM.render( 
<Provider store={store}>
< Root / >
</Provider>, 
// eslint-disable-next-line no-undef
document.getElementById('root'));