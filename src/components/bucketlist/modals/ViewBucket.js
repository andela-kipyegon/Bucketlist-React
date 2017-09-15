import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap'; 
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/lib/md';
import Toggle from 'react-toggle'

import { hideModal } from  '../../../actions/bucketlistActions';
import ModalWrapper from '../ModalWrapper';

const ViewBucket = ({ title, hideModal, content }) => {
    const onClose = () => {
         hideModal();
    };

    let done = false
    
    const toggle = (value) => {
        done = !value
    }

    const padding = 'p-0'
    return (
        

        <ModalWrapper title={title} onClose={onClose} padding={padding}> 
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item Name</th>
                    <th>Done</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Entebe</td>
                    <td>
                        <label>
                            <Toggle
                                defaultChecked={done}
                                onChange={toggle(done)} />
                        </label>
                    </td>
                    <td>
                        <button type="button" className="action mx-2 icon-edit close" data-dismiss="modal">
                            <MdEdit size={20}/>
                        </button>
                        <button type="button" className="action mx-2 icon-delete close" data-dismiss="modal">
                            <MdDelete size={20}/>
                        </button>
                    </td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Jinja</td>
                    <td>
                        <label>
                            <Toggle
                                defaultChecked={done}
                                onChange={toggle(done)} />
                        </label>
                    </td>
                    <td>
                        <button type="button" className="action mx-2 icon-edit close" data-dismiss="modal">
                            <MdEdit size={20}/>
                        </button>
                        <button type="button" className="action mx-2 icon-delete close" data-dismiss="modal">
                            <MdDelete size={20}/>
                        </button>
                    </td>
                </tr>
        
                </tbody>
            </Table>
        </ModalWrapper>
    );
};

ViewBucket.propTypes = {
    title: PropTypes.string,
    hideModal: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal())
    };
}

export default connect(null,mapDispatchToProps)(ViewBucket);