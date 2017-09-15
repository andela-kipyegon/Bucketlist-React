import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { loadBucketlists } from './actions/bucketlistActions';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css';

const store = configureStore();

if (!!localStorage.getItem('auth_token')) {
    store.dispatch(loadBucketlists());
}

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
