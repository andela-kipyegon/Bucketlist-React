import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../common/TextInput';

const RegisterForm = ({register, loading, onChange}) => {
    return (
        <div className="container login-form">
            <div className="row">
                <form>
                    <h2>Sign Up</h2>
                    <hr className="colorgraph"/>
                    <TextInput 
                        name="first_name"
                        label="First Name"
                        type="text"
                        onChange={onChange}
                        placeholder="First Name" />

                    <TextInput 
                        name="last_name"
                        label="Last Name"
                        type="text"
                        onChange={onChange}
                        placeholder="Last Name" />
                    
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
                        placeholder="Password"/>

                    <TextInput
                        name="confirm_password"
                        label="Confirm Password"
                        type="password"
                        onChange={onChange}
                        placeholder="Confirm Password"/>
                    
                    <hr className="colorgraph buttons-divider"/>    
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6"> 
                            <input 
                                type="submit"
                                disabled={loading}
                                onClick={register}
                                value={loading ? 'Registering' : 'Register'}
                                className="btn btn-lg btn-success btn-block"/>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-6">
                            <a href="/" className="btn btn-lg btn-primary btn-block">Login</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
    );
};

RegisterForm.propTypes = {
    register: PropTypes.func,
    loading: PropTypes.bool,
    onChange: PropTypes.func
};

export default RegisterForm;
