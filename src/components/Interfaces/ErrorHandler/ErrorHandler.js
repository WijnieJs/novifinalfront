import React from 'react';

import Modal from "../Modal/Modal";

import Button from "../../Forms/Button"

const ErrorHandler = props => {
  { console.log("Error") }
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorHandler;
