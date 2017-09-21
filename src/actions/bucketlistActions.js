import bucketlistApi from '../api/bucketlistApi';
import * as types from '../constants/actionTypes';

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
    return { type: types.CREATE_BUCKETLIST_SUCCESS, bucketlist };
}

export function deleteBucketlistSuccess(bucketlistId) {
    return { type: types.DELETE_BUCKETLIST_SUCCESS, bucketlistId };
}

export function loadBucketlistSuccess(bucketlists) {
    return { type: types.LOAD_BUCKETLIST_SUCCESS, bucketlists };
}

export function editBucketlistSuccess(bucketlist) {
    return { type: types.EDIT_BUCKETLIST_SUCCESS, bucketlist };
}

export function editItemSuccess(savedItem, bucketId) {
    return { type: types.EDIT_ITEM_SUCCESS, savedItem, bucketId };
}

export function deleteItemSuccess(bucketId, itemId) {
    return { type: types.DELETE_ITEM_SUCCESS, bucketId, itemId };
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

export function editBucketlist(bucketlistId, name) {
    return function(dispatch) {
        return bucketlistApi.editBucketlist(bucketlistId, name).then(response => {
            dispatch(editBucketlistSuccess(response));
            return response;
        }).catch(error => {
            throw(error);
        })
    }
}

export function editItem(bucketId, itemId, updatedItem) {
    return function(dispatch) {
        return bucketlistApi.editItem(bucketId, itemId, updatedItem).then(response => {
            dispatch(editItemSuccess(response, bucketId));
            return response;
        }).catch(error => {
            throw(error);
        })
    }
}

export function deleteItem(bucketId, itemId) {
    return function(dispatch) {
        return bucketlistApi.deleteItem(bucketId, itemId).then(() => {
            return dispatch(deleteItemSuccess(bucketId, itemId));
        }).catch(error => {
            throw(error);
        })
    }
}