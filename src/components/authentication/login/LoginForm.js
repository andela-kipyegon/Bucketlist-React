import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';

const LoginForm = ({login, loading, onChange}) => {
    return (
        <div className="row">
            <div className="col-xs-6 col-md-6 col-sm-6 offset-md-6">
                <div className="panel panel-default login-form">
                    <div className="panel-header">
                        <h2>Sign In</h2>
                        <hr className="colorgraph"/>
                    </div>
                    <div className="panel-body">
                        <form>
                            <TextInput 
                                name="email"
                                label="Email"
                                type="text"
                                onChange={onChange}
                                placeholder="Email" />

                            <TextInput
                                name="password"
                                label="Password"
                                type="password"
                                onChange={onChange}
                                placeholder="password"/>

                            <hr className="colorgraph buttons-divider"/>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-md-offset-6"> 
                                    <input 
                                        type="submit"
                                        disabled={loading}
                                        onClick={login}
                                        value={loading ? 'Logging in' : 'Login'}
                                        className="btn btn-lg btn-success btn-block"/>
                                </div>

                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <a href="/register" className="btn btn-lg btn-primary btn-block">Register</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    );
};

LoginForm.propTypes = {
    login: PropTypes.func,
    loading: PropTypes.bool,
    onChange: PropTypes.func
};

export default LoginForm;
