import React from 'react';
import PropTypes from 'prop-types';
import  BucketlistButtons from './BucketlistButtons';

class Bucket extends{
    return (
        <div className="col-sm-4">
            <div className="business-hours" >
                <h2 className="title">{bucket.name}</h2>
                <div className="row buttons">
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    );
};

Bucket.propTypes = {
    bucket: PropTypes.object.isRequired 
};

export default Bucket;