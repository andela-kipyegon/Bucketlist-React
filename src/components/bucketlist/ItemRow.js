import React from 'react';
import PropTypes from 'prop-types';

import Toggle from 'react-toggle';
import  { MdEdit, MdDelete } from 'react-icons/lib/md';

let checked;

const toggle = (value) => {
    checked = !value
};

const ItemRow = ({itemId, itemName, done, openModal}) => {
    checked = (done == 'true');

    return (
        <tr>
            <td>{itemId}</td>
            <td>{itemName}</td>
            <td>
                <label>
                    <Toggle
                        defaultChecked={checked}
                        onChange={toggle(checked)} />
                </label>
            </td>
            <td>
                <button type="button" className="action mx-2 icon-edit close" data-dismiss="modal" onClick={() => openModal('edit', itemId)}>
                    <MdEdit size={20}/>
                </button>
                <button type="button" className="action mx-2 icon-delete close" data-dismiss="modal" onClick={() => openModal('delete',itemId)}>
                    <MdDelete size={20}/>
                </button>
            </td>
        </tr>
	);
};

ItemRow.propTypes = {
};

export default ItemRow;