import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentPanel = ({ addClass, children, dialogHeight, id }) => {
  const myRef = React.useRef();
  const [toTop, setToTop] = React.useState();
  const classes = classNames(
    'content-panel',
    addClass,
  );

  React.useEffect(() => {
    const panel = myRef.current;
    setToTop(panel.getBoundingClientRect().top);
  }, [])

  const styles = dialogHeight && { maxHeight: `calc(100vh - ${toTop}px)`, height: '-webkit-fill-available' };

  return (
    <div ref={myRef} className={classes} style={styles} id={id}>{children}</div>
  );
};

ContentPanel.defaultProps = {};

ContentPanel.propTypes = {
  children: PropTypes.node,
  dialogHeight: PropTypes.bool,
  id: PropTypes.string.isRequired,
  addClass: PropTypes.string,
};

export default ContentPanel;
