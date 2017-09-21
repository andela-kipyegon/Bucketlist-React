import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {Button} from 'react-bootstrap';
import Modal from 'react-modal';

class ModalWrapper extends Component {

  constructor(props, context) {
        super(props, context);

        this.state = {
          open : false
        }
  }

  
  render () {
    const {onClose} = this.props;
    const body = "modal-body " + this.props.padding

    return (
        <Modal
            isOpen={this.props.open}
            onRequestClose={onClose}
            className="modal-dialog"
            contentLabel="Modal"
        >
            <div className="modal-content theme-content">
                <div className="modal-header theme-header">
                    <h4 className="modal-title">{this.props.title}</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className={body}>
                      {this.props.children}
                </div>
                <div className="modal-footer theme-footer">
                      <Button onClick={onClose}>Close</Button>
                      {this.props.button}
                </div>
              </div>
        </Modal>

    );
  }
}

ModalWrapper.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    onClose: PropTypes.func
};

function mapStateToProps(state) {
    return {
        open: state.modal.type ? true : false,
        button: state.modal.props.button
    };
}

export default connect(mapStateToProps)(ModalWrapper);