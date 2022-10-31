import React, { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Modal from '../Modal/Modal';

const errorHandler = (props) => (
   <Fragment>
      {props.error && <Backdrop onClick={props.onHandle} />}
      {props.error && (
         <Modal
            title={props.title ? props.title : 'An Error Occurred'}
            onCancelModal={props.onCancel}
            onAcceptModal={props.onHandle}
            acceptEnabled
            actionText={props.actionText}
            noActionText={props.noActionText}
         >
            <p>{props.msg}</p>
         </Modal>
      )}
   </Fragment>
);

export default errorHandler;
