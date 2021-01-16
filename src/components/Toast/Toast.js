import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Toast.scss';
import { Dialog } from '../Dialog';
import { Typography } from '../Typography';

const Toast = ({
  addClass,
  title,
  onClose,
  isOpen,
  isError,
  children,
}) => {
  const toastClasses = classNames('dialog-toast', addClass, { error: isError, success: !isError });

  return (
    <Dialog
      id="dialog-toast"
      testId="dialog-toast"
      addDialogClass={toastClasses}
      type="toast"
      title={title}
      onClose={onClose}
      isOpen={isOpen}
    >
      <Typography id="example-toast" variant="body">
        {children}
      </Typography>
    </Dialog>
  );
};

Toast.propTypes = {
  addClass: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  isError: PropTypes.bool,
  children: PropTypes.node,
};

export default Toast;
