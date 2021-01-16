
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Script = ({
  url,
  text,
  type,
  isAsync,
  isDeferred,
  domId
}) => {

  useEffect(() => {
    const script = (document !== undefined) ? document.createElement('script') : null;

    if (script) {
      url && (script.src = url); // eslint-disable-line
      text && (script.text = text); // eslint-disable-line
      domId && (script.id = domId); // eslint-disable-line
      script.type = type;
      script.async = isAsync;
      script.defer = isDeferred;

      document?.body && (document.body.appendChild(script)); // eslint-disable-line

      // Remove script on unmount
      return () => {
        document?.body && (document.body.removeChild(script)); // eslint-disable-line
      }
    }
  }, [text]);

  return null;
};

Script.defaultProps = {
  isAsync: true,
  isDeferred: true
};

Script.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  isAsync: PropTypes.bool,
  isDeferred: PropTypes.bool,
  domId: PropTypes.string
};

export default Script;
