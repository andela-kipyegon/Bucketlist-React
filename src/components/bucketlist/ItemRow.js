import React from 'react';
import PropTypes from 'prop-types';

import Toggle from 'react-toggle';
import  { MdEdit, MdDelete } from 'react-icons/lib/md';

// let checked;

const ItemRow = ({count, item, openModal, updateItemStatus}) => {
    return (
        <tr>
            <td>{count}</td>
            <td>{item.name}</td>
            <td>
                <label>
                    <Toggle
                        defaultChecked={item.done}
                        onChange={() => updateItemStatus(item.bucketlist_item_id)} />
                </label>
            </td>
            <td>
                <button type="button" className="action mx-2 icon-edit close" data-dismiss="modal" onClick={() => openModal('edit', item.bucketlist_item_id)}>
                    <MdEdit size={20}/>
                </button>
                <button type="button" className="action mx-2 icon-delete close" data-dismiss="modal" onClick={() => openModal('delete',item.bucketlist_item_id)}>
                    <MdDelete size={20}/>
                </button>
            </td>
        </tr>
	);
};

ItemRow.propTypes = {
};

export default ItemRow;