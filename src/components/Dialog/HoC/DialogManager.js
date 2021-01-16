import React from 'react';

// Higher Order Component - https://reactjs.org/docs/higher-order-components.html
const DialogManager = (WrappedModal, Context) => ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openedBy, setOpenedBy] = React.useState(null); // Refocuses on the trigger that opened the Dialog

  const open = (e) => {
    setIsOpen(true);
    if (e && e.currentTarget) {
      setOpenedBy(e.currentTarget);
    }
  };

  const close = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (!isOpen && openedBy) {
      openedBy.focus();
      setOpenedBy(null);
    }
  }, [isOpen]);

  return (
    <Context.Provider value={{ isOpen, openedBy, open, close }}>
      {children}
      <WrappedModal />
    </Context.Provider>
  );
};

export default DialogManager;
