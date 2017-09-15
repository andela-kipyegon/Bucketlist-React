import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import * as authActions from '../../../actions/authActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';

class LoginPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            credentials: {email: '', password: ''},
            loading: false
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        let credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }

    login(event) {
        event.preventDefault();
        this.props.actions.loginUser(this.state.credentials)
            .then(() => { this.redirectToBucketlistPage(); })
            .catch(error => {
                toastr.error(error);
             });
    }

    redirectToBucketlistPage() {
        this.setState({saving: false});
        toastr.success('Successfully logged in');
        this.context.router.push('/bucketlists');
    }

    render() {
        return (
            <LoginForm 
                loading={this.state.loading}
                login={this.login}
                onChange={this.onChange} />  
        );
    }
    
}

LoginPage.propTypes = {
    actions: PropTypes.object.isRequired
};

LoginPage.contextTypes = {
    router: PropTypes.object
};

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
