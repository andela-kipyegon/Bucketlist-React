import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({name, label, type, placeholder, onChange, value}) => {

    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <div className="field">
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value} />
            </div>
        </div>
	);
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    placeholder: PropTypes.string.isRequired
};

export default TextInput;