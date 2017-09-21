import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { hideModal } from  '../../../actions/bucketlistActions';
import ModalWrapper from '../ModalWrapper';

const EditBucket = ({ title, hideModal, content }) => {
    const onClose = () => {
         hideModal();
    };
    return (
        <ModalWrapper title={title} onClose={onClose}> 
            {content}
        </ModalWrapper>
    );
};

EditBucket.propTypes = {
    title: PropTypes.string,
    hideModal: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal())
    };
}

export default connect(null,mapDispatchToProps)(EditBucket);