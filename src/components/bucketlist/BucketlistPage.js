import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PropTypes from 'prop-types';
import { MainButton } from 'react-floating-button-menu';
import MdAdd from 'react-icons/lib/md/add';
import { Button } from 'react-bootstrap';
import toastr from 'toastr';
import MdClose from 'react-icons/lib/md/close';

import * as bucketlistActions from '../../actions/bucketlistActions';
import { ADD_BUCKET } from '../../constants/modalTypes';
import TextInput from '../common/TextInput';
import Bucket from './Bucket';

class BucketlistPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            bucket: {name: ''}
        };

        this.showAddModal = this.showAddModal.bind(this);
        this.updateBucketName = this.updateBucketName.bind(this);
        this.saveBucket = this.saveBucket.bind(this);
    }

    showBuckets() {
        const buckets = this.props.bucketlists.bucketlist ? this.props.bucketlists.bucketlist: [];
        let numRows = buckets.length % 3 == 0 ? buckets.length / 3: ((buckets.length  - (buckets.length % 3))/ 3) + 1;
        let count = 0;
        let rows = [];
        
        if (numRows >= 1) {
            for (let i = 0; i < numRows; i++) {
                let items = [];
                let row_cols = (i + 1) == numRows && buckets.length % 3 != 0 ? buckets.length % 3: 3;

                for (let j = 0; j < row_cols; j++) {
                    let col = <Bucket bucket={buckets[count]} key={buckets[count].id}/>;
                    items.push(col);
                    count = count + 1;
                }

                let row_items = <div className="row demo-bg" key={i}>{items}</div>;
                rows.push(row_items);
            }
            
        }
        return rows;
    }

    updateBucketName(event) {
        const field = event.target.name;
        let bucket = this.state.bucket;
        bucket[field] = event.target.value;
        return this.setState({ bucket: bucket });
    }

    saveBucket(event) {
        event.preventDefault();
        this.props.actions.createBucketlist(this.state.bucket)
            .then(() => {
                this.saveSuccess();
            })
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    showAddModal() {
        const input = <TextInput 
            name="name"
            label="Bucket Name"
            type="text"
            onChange={this.updateBucketName}
            placeholder="Enter the name of your Bucket"
        />
        
        const saveButton = <Button onClick={this.saveBucket} bsStyle="success">Save Changes</Button>

        this.props.actions.loadModal(ADD_BUCKET, {
            title: 'Add Bucket ',
            content: input,
            button: saveButton
        });
    }

    saveSuccess() {
        this.props.actions.hideModal();
        toastr.success('Bucketlist added successfully');
    }

    render() {
        const rows = this.showBuckets();
        return (
            <div>
                {rows}
                <MainButton
                    iconResting={MdAdd}
                    iconActive={MdClose}
                    iconColor="white"
                    backgroundColor="green"
                    buttonSize="300"
                    className="icon-add"
                    onClick={this.showAddModal}
                />
            </div>
        );    
    }
}

BucketlistPage.propTypes = {
    actions: PropTypes.object.isRequired,
    bucketlists: PropTypes.any
};

function mapStateToProps(state) {
    return {
        bucketlists: state.bucketlists
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(bucketlistActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketlistPage);