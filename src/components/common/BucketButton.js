import React from 'react';
import PropTypes from 'prop-types';

const BucketButtons = ({action, icon, buttonType, name}) => {
    return (
        <div className="row">
            <a href="#" className={buttonType} onClick={action}>
                {icon}
                <span><strong>{name}</strong></span>            
            </a>
        </div>       
	);
};

BucketButtons.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.node,
    buttonType: PropTypes.string,
    action: PropTypes.func 
};

export default BucketButtons;