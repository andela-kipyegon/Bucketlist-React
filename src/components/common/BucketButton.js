import React from 'react';
import PropTypes from 'prop-types';

const BucketButton = ({action, icon, buttonType, name}) => {
    return (
        <div className="row">
            <button href="#" className={buttonType} onClick={action}>
                {icon}
                <span><strong>{name}</strong></span>            
            </button>
        </div>       
	);
};

BucketButton.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.node,
    buttonType: PropTypes.string,
    action: PropTypes.func 
};

export default BucketButton;