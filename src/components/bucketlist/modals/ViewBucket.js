import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap'; 
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/lib/md';
import Modal from 'react-modal';
import Toggle from 'react-toggle'

import { hideModal } from  '../../../actions/bucketlistActions';
import ModalWrapper from '../ModalWrapper';
import ItemRow from '../ItemRow';
import DeleteItem from '../item-modals/DeleteItem';
import EditItem from '../item-modals/EditItem';

class ViewBucket extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showModal: false,
            modalContent: null,
            params: {
                item: null,
                action: null
            }
        }

        this.onClose = this.onClose.bind(this);
        this.updateItemName = this.updateItemName.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onClose() {
        this.props.hideModal();
    }

    updateItemName(event) {
        let item = this.state.params.item;
        item.name = event.target.value;
        return this.setState({
            params : { item }
        });  
    }

    editItem() {
        // let bucketName = { name: this.state.bucket.name };
        // this.props.actions.editBucketlist(bucketId, bucketName)
        //     .then((response) =>{
        //         toastr.success('Bucket has been updated');
        //         return this.props.actions.hideModal();
        //     }).catch(error => {
        //         toastr.error(error)
        //     });
    }

    openModal(modalType, itemId) {
        if (modalType == 'edit') {
            return this.setState({
                modalContent: EditItem,
                showModal: true,
                params: {
                    item: { ...this.props.content.filter(item => item.bucketlist_item_id == itemId)[0] }
                }
            });
        }

        return this.setState({
            modalContent: DeleteItem,
            showModal: true,
            params: {
                item: { ...this.props.content.filter(item => item.bucketlist_item_id == itemId)[0] }
            }
        }); 
    }

    closeModal() {
        return this.setState({ showModal: false });
    }

    render() {
        const padding = 'p-0';
        const ModalContent = this.state.modalContent;
        const params = { ...this.state.params, action: this.updateItemName }
        let rows;

        if (this.props.content.length > 1) {
            rows = this.props.content.map(item => <ItemRow itemId={item.bucketlist_item_id} itemName={item.name} done={item.done} openModal={this.openModal} />);
        }
        else {
            rows = <tr><td colSpan="4">Nothing to display</td></tr>;
        }

        return (
            <ModalWrapper title={this.props.title} onClose={this.onClose} padding={padding}> 
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
                        {rows}
                    </tbody>
                </Table>
                {this.state.showModal && 
                    <Modal
                        isOpen={this.state.showModal}
                        onRequestClose={this.closeModal}
                        contentLabel="Modal"
                        className="modal-dialog modal-sm">
                        <div className="modal-content">
                           <div className="modal-header theme-header">
                                <h4 className="modal-title">Edit {this.state.params.item.name}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                           </div>
                           <div className="modal-body">
                              {<ModalContent {...params}/>}
                           </div>
                        </div>
                    </Modal>}
            </ModalWrapper>
        );

    }
}

ViewBucket.propTypes = {
    title: PropTypes.string,
    hideModal: PropTypes.func
};

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal()),
        editItem: (itemId, itemName) => dispatch(editItem(itemId, itemName)),
        deleteItem: (itemId) => dispatch(editItem(itemId))
    };
}

export default connect(null, mapDispatchToProps)(ViewBucket);



