import bucketlistApi from '../api/bucketlistApi';
import * as types from '../constants/actionTypes';

export function loadBucketlistSuccess(bucketlists) {
    return { type: types.LOAD_BUCKETLIST_SUCCESS, bucketlists };
}

export const loadModal = (type, props) => {
    return {
        type: types.SHOW_MODAL,
        payload: {
            type,
            props
        }
    };
};

export const hideModal = () => {
    return {
        type: types.HIDE_MODAL
    };
};

export function createBucketlistSuccess(bucketlist) {
    return { type: types.CREATE_BUCKETLIST_SUCCESS, bucketlist}
}

export function deleteBucketlistSuccess(bucketlistId) {
    return { type: types.DELETE_BUCKETLIST_SUCCESS, bucketlistId}
}

export function loadBucketlists() {
    return function(dispatch) {
        return bucketlistApi.load_bucketlists().then(response => {
            dispatch(loadBucketlistSuccess(response));
            return response;
        }).catch(error => {
            throw(error);
        });
    };
}

export function createBucketlist(name) {
    return function(dispatch) {
        return bucketlistApi.createBucket(name).then(response => {
            dispatch(createBucketlistSuccess(response));
            return response;
        }).catch(error => {
            throw(error);
        });
    }
}

export function deleteBucketlist(bucketId) {
    return function(dispatch) {
        return bucketlistApi.deleteBucketlist(bucketId).then(response => {
            dispatch(deleteBucketlistSuccess(bucketId));
            return response;
        }).catch(error => {
            throw(error);
        })
    }
}