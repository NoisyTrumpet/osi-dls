import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../components/Typography';
import './DesignTokens.scss';

const Code = ({ children }) => (
  <pre>
    <code>{children}</code>
  </pre>
);

function TypoLoop() {
  const data = <Typography variant="headline-1" />;
  const loop = data.type.variants;
  const result = [];
  Object.keys(loop).forEach((key) => {
    result.push(
      <>
        <Typography variant={loop[key]}>
          The quick brown fox jumps over the lazy dog
        </Typography>
        <Code>{`<Typography variant="${loop[key]}"/>`}</Code>
        <br />
      </>,
    );
  });
  return result;
}

export const TypographyToken = () => ( // eslint-disable-line import/prefer-default-export
  <div>
    <h1 className="Typography">Typography</h1>
    <TypoLoop />
  </div>
);

Code.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};
