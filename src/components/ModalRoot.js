import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import DeleteBucket from './bucketlist/modals/DeleteBucket';
import EditBucket from './bucketlist/modals/EditBucket';
import ViewBucket from './bucketlist/modals/ViewBucket';
import AddBucket from './bucketlist/modals/AddBucket';

import { DELETE_BUCKET, EDIT_BUCKET, VIEW_BUCKET, ADD_BUCKET } from '../constants/modalTypes';

const MODAL_COMPONENTS = {
    [DELETE_BUCKET]: DeleteBucket,
    [EDIT_BUCKET]: EditBucket,
    [VIEW_BUCKET]: ViewBucket,
    [ADD_BUCKET]: AddBucket
};

const ModalRoot = ({type, props}) => {
    if (!type) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[type];
    return <SpecificModal {...props} />;
};

ModalRoot.propTypes = {
    modal: PropTypes.object
};

function mapStateToProps(state) {
    return state.modal;
}

export default connect(mapStateToProps)(ModalRoot);