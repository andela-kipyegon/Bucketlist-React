import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/authentication/login/LoginPage';
import RegisterPage from './components/authentication/registration/RegisterPage';
import BucketlistPage from './components/bucketlist/BucketlistPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage} />
        <Route path="register" component={RegisterPage} />
        <Route path="bucketlists" component={BucketlistPage} />
    </Route>
); 