import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const EditItem = ({ item, action}) => {
    
    const Item =  item;

    return (
        <div className="row">
            <div className="col-sm-9">
                <input
                    type="text"
                    name="item_name"
                    className="form-control"
                    onChange={action.onChange}
                    placeholder="Item Name"
                    value={item.name}
                />
            </div>
            <div className="col-sm-3">
                <Button bsStyle="primary" onClick={(item) => action.edit(Item)}>
                     Edit
                </Button>
            </div>
        </div>
    );
};

export default EditItem;