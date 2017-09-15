import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  { MdEdit, MdDelete, MdVisibility } from 'react-icons/lib/md';
import toastr from 'toastr';
import { Button } from 'react-bootstrap';

import { DELETE_BUCKET, EDIT_BUCKET, VIEW_BUCKET } from '../../constants/modalTypes';
import * as bucketlistActions from '../../actions/bucketlistActions';
import { loadModal } from '../../actions/bucketlistActions';
import TextInput from '../common/TextInput';

const BucketlistButtons = (props) => {

    let 

    const deleteBucket = (bucketId) => {
        const hideModal = () => props.actions.hideModal();
        props.actions.deleteBucketlist(bucketId)
            .then((response) => {
                toastr.success(response.message);
                debugger;
                return hideModal();
            })
            .catch(error => {
                toastr.error(error);
            });
    }

    const updateBucketName = (event) => {
        const field = event.target.name;
        return field;
    };

    const showDeleteBucket = () => {      
        props.actions.loadModal(DELETE_BUCKET, {
            title: 'Delete Bucket ' + props.bucket.name,
            content: 'Are you sure you want to delete ' + props.bucket.name + '?',
            button: <Button onClick={() => { deleteBucket(props.bucket.id)}}  bsStyle="danger">Delete</Button>
        });
    };

    const showEditBucket = () => {   
        const input = <TextInput name="name"
            label="Bucket Name"
            type="text"
            placeholder="Bucket name"
            onChange={(event) => { updatebucketName(event) }}
            value={props.bucket.name}
        />

        props.actions.loadModal(EDIT_BUCKET, {
            title: 'Edit Bucket ' + props.bucket.name,
            content: input,
            button: <Button bsStyle="primary">Edit</Button>
        });
    };

    const showViewBucket = () => {
        props.actions.loadModal(VIEW_BUCKET, {
            title: 'Items in ' + props.bucket.name ,
            content: 'hey',
            button: <Button bsStyle="success">Add Item</Button>
        });
    };

    return (
        <div className="row buttons">
            <div className="col">
                <div className="row">
                    <a href="#" className="btn btn-primary a-btn-slide-text btn-block" onClick={showEditBucket}>
                        <MdEdit size={20}/>
                        <span><strong>Edit</strong></span>            
                    </a>
                </div>
                <div className="row">
                    <button href="#" className="btn btn-success a-btn-slide-text btn-block" onClick={showViewBucket}>
                        <MdVisibility size={20}/>
                        <span><strong>View Items</strong></span>            
                    </button>
                </div>
                <div className="row">
                    <button href="#" className="btn btn-danger a-btn-slide-text btn-block" onClick={showDeleteBucket}>
                        <MdDelete size={20}/>
                        <span><strong>Delete</strong></span>            
                    </button>
                </div>
            </div>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bucketlistActions, dispatch),
    };
}

export default connect(null,mapDispatchToProps)(BucketlistButtons);
