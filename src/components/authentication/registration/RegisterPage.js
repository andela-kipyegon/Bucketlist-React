import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from './RegisterForm';
import * as authActions from '../../../actions/authActions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';

class RegisterPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        let userDetails = {
            email: '',
            password: '',
            first_name: '',
            last_name: '' 
        };

        this.state = {
            credentials: userDetails,
            loading: false,
            errors: {}
        };

        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({credentials: credentials});
    }

    register(event) {
        event.preventDefault();
        this.props.actions.regiserUser(this.state.credentials)
            .then(() => { this.redirectToBucketlistPage(); })
            .catch(error => {
                toastr.error(error);
             });
    }

    redirectToBucketlistPage() {
        this.setState({saving: false});
        toastr.success('Successfully register in');
        this.context.router.push('/bucketlists');
    }

    render() {
        return (
            <RegisterForm 
                loading={this.state.loading}
                login={this.register}
                onChange={this.onChange} />  
        );
    }
    
}

RegisterPage.propTypes = {
    actions: PropTypes.object.isRequired
};

RegisterPage.contextTypes = {
    router: PropTypes.object
};

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(RegisterPage);



