import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-bootstrap'; 
import { MdEdit, MdDelete, MdVisibility } from 'react-icons/lib/md';
import Modal from 'react-modal';
import Toggle from 'react-toggle';
import toastr from 'toastr';

import { hideModal, editItem, deleteItem } from  '../../../actions/bucketlistActions';
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
        this.editItem = this.editItem.bind(this);
        this.updateItemName = this.updateItemName.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItemStatus =this.updateItemStatus.bind(this);
    }


    onClose() {
        this.props.hideModal();
    }

    updateItemName(event) {
        let item = this.state.params.item;
        item.name = event.target.value;

        return this.setState({
            params: { 
                item,
                action: { 
                        edit: this.editItem,
                        onChange: this.updateItemName
                }
            }
        });  
    }

    updateItemStatus(itemId) {
        let item = { ...this.props.bucketlist.items.filter(item => item.bucketlist_item_id == itemId)[0] };
        item.done = !item.done;
        return this.editItem(item);
    }

    editItem(savedItem) {
        let item = savedItem;
        let bucketId = this.props.bucketId;
        let updatedItem = {
            item_name: item.name,
            done: item.done
        };

        return this.props.editItem(bucketId, item.bucketlist_item_id, updatedItem)
            .then(() => {
                toastr.success('Item has been updated');
                return this.closeModal();
            }).catch(error => {
                toastr.error(error)
            });
    }

    deleteItem() {
        let itemId = this.state.params.item.bucketlist_item_id;
        let bucketId = this.props.bucketId;
        
        this.props.deleteItem(bucketId, itemId)
            .then(() =>{
                toastr.success('Item has been deleted');
                return this.closeModal();
            }).catch(error => {
                toastr.error(error)
            });
    }

    openModal(modalType, itemId) {
        if (modalType == 'edit') {
            return this.setState({
                modalContent: EditItem,
                showModal: true,
                params: {
                    item: { ...this.props.bucketlist.items.filter(item => item.bucketlist_item_id == itemId)[0] },
                    action: { 
                        edit: this.editItem,
                        onChange: this.updateItemName
                    }
                }
            });
        }

        return this.setState({
            modalContent: DeleteItem,
            showModal: true,
            params: {
                item: { ...this.props.bucketlist.items.filter(item => item.bucketlist_item_id == itemId)[0] },
                action: { 
                    delete: this.deleteItem,
                    closeModal: this.closeModal
                }
            }
        }); 
    }

    closeModal() {
        return this.setState({ showModal: false });
    }

    render() {
        const padding = 'p-0';
        const ModalContent = this.state.modalContent;
        const params = { ...this.state.params }
        let rows;
        
        if (this.props.bucketlist.items.length > 0) {
            rows = this.props.bucketlist.items.map((item, index) =>
                <ItemRow 
                    key={index}
                    count={index+1}
                    item={item}
                    openModal={this.openModal}
                    updateItemStatus={this.updateItemStatus}
                />
            );
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

function mapStateToProps(state, ownProps) {
    return {
        bucketlist: state.bucketlists.bucketlist.filter(bucket => bucket.id == ownProps.bucketId )[0]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        hideModal: () => dispatch(hideModal()),
        editItem: (bucketId,itemId, updatedItem) => dispatch(editItem(bucketId, itemId, updatedItem)),
        deleteItem: (bucketId, itemId) => dispatch(deleteItem(bucketId, itemId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBucket);



