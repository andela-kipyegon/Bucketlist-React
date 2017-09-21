import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const DeleteItem = ({action}) => {
    
    return (
        <div className="row justify-content-center">
            <div className="col-sm-5">
                <Button onClick={action.closeModal}>
                    Close
                </Button>
            </div>
            <div className="col-sm-4">
                <Button bsStyle="danger" onClick={action.delete}>
                    Delete
                </Button>
            </div>
        </div>
    );
};

export default DeleteItem;
