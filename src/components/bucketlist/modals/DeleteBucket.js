import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { hideModal } from  '../../../actions/bucketlistActions';
import ModalWrapper from '../ModalWrapper';

const DeleteBucket = ({ title, hideModal, content }) => {
    const onClose = () => {
         hideModal();
    };
    
    return (
        <ModalWrapper title={title} onClose={onClose}> 
            {content}
        </ModalWrapper>
    );
};

DeleteBucket.propTypes = {
    title: PropTypes.string,
    hideModal: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal())
    };
}

export default connect(null,mapDispatchToProps)(DeleteBucket);
