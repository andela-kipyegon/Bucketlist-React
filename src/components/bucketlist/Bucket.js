import React from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import  { MdEdit, MdDelete, MdVisibility } from 'react-icons/lib/md';
import toastr from 'toastr';
import { Button } from 'react-bootstrap';

import { DELETE_BUCKET, EDIT_BUCKET, VIEW_BUCKET } from '../../constants/modalTypes';
import * as bucketlistActions from '../../actions/bucketlistActions';
import TextInput from '../common/TextInput';
import  BucketButton from '../common/BucketButton';

class Bucket extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            bucket: Object.assign({}, this.props.bucket)
        };
    
        this.updateBucketName = this.updateBucketName.bind(this);
        this.showEditBucket = this.showEditBucket.bind(this);
        this.showViewBucket = this.showViewBucket.bind(this);
        this.showDeleteBucket = this.showDeleteBucket.bind(this);
    }

    showViewBucket() {
        this.props.actions.loadModal(VIEW_BUCKET, {
            title: 'Items in ' + this.props.bucket.name,
            bucketId: this.state.bucket.id,
            button: <Button bsStyle="success">Add Item</Button>
        });
    }

    showDeleteBucket() {      
        this.props.actions.loadModal(DELETE_BUCKET, {
            title: 'Delete Bucket ' + this.props.bucket.name,
            content: 'Are you sure you want to delete ' + this.props.bucket.name + '?',
            button: <Button onClick={() => { this.deleteBucket(this.props.bucket.id)}}  bsStyle="danger">Delete</Button>
        });
    };

    showEditBucket() {   
        const input = <TextInput name="name"
            label="Bucket Name"
            type="text"
            placeholder="Bucket name"
            onChange={this.updateBucketName}
            value={this.state.bucket.name}
        />;

        this.props.actions.loadModal(EDIT_BUCKET, {
            title: 'Edit Bucket ' + this.state.bucket.name,
            content: input,
            button: <Button onClick={() => {this.editBucket(this.state.bucket.id)}} bsStyle="primary">Edit</Button>
        });
    }

    updateBucketName(event) {
        let bucket = this.state.bucket;
        bucket.name = event.target.value;
        this.showEditBucket();
        return this.setState({ bucket});
    };

    deleteBucket(bucketId) {
        const hideModal = () => this.props.actions.hideModal();
        this.props.actions.deleteBucketlist(bucketId)
            .then((response) => {
                toastr.success(response.message);
                return hideModal();
            })
            .catch(error => {
                toastr.error(error);
            });
    }

    editBucket(bucketId) {
        let bucketName = { name: this.state.bucket.name }
        this.props.actions.editBucketlist(bucketId, bucketName)
            .then((response) =>{
                toastr.success('Bucket has been updated');
                return this.props.actions.hideModal();
            }).catch(error => {
                toastr.error(error)
            });
    }

    render() {
        const buttons = [
            {
                name: 'Edit',
                icon: [<MdEdit size={20}/>],
                action: this.showEditBucket,
                buttonType: 'btn btn-primary a-btn-slide-text btn-block'
            },
            {
                name: 'View Items',
                icon: [<MdVisibility size={20}/>],
                action: this.showViewBucket,
                buttonType: 'btn btn-success a-btn-slide-text btn-block'
            },
            {
                name: 'Delete',
                icon: [<MdDelete size={20}/>],
                action: this.showDeleteBucket,
                buttonType: 'btn btn-danger a-btn-slide-text btn-block'
            }
        ];

        const renderedButtons = buttons.map((button) => {
            return <BucketButton action={button.action} icon={button.icon} name={button.name} buttonType={button.buttonType} />;
        });

        return (
            <div className="col-sm-4">
                <div className="business-hours" >
                    <h2 className="title">{this.props.bucket.name}</h2>
                    <div className="row buttons">
                        <div className="col">
                            {renderedButtons}
                        </div>
                    </div>
                </div>
            </div>
        );

    }  
};

Bucket.propTypes = {
    bucket: PropTypes.object.isRequired 
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bucketlistActions, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(Bucket);