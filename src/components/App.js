// This component handles the app template used on every page
import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import ModalRoot from './ModalRoot';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    {this.props.children}
                </div>
                <ModalRoot />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;