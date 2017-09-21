import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const DeleteItem = () => {
    
    return (
        <div className="row justify-content-center">
            <div className="col-sm-5">
                <Button className="item-actions">Close</Button>
            </div>
            <div className="col-sm-4">
                <Button bsStyle="danger" className="item-actions">Delete</Button>
            </div>
        </div>
    );
};

export default DeleteItem;
