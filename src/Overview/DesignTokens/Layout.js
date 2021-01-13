import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../../components/Grid';
import { Typography } from '../../components/Typography';
import './DesignTokens.scss';

function SpaceItem({ children }) {
  return (
    <div className="spaceItem" style={{ padding: '20px', textAlign: 'center' }}>
      {children}
    </div>
  );
}

const gridCode = `<Grid
  grid={4}
  landscape={3}
  portrait={2}
  mobile={1}
  gap={16}
  >
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
  <div>Col 4</div>
  <div>Col 5</div>
  <div>Col 6</div>
</Grid>`;

const Code = ({ children }) => (
  <pre>
    <code>{children}</code>
  </pre>
);

export const Layout = () => ( // eslint-disable-line import/prefer-default-export
  <>
    <section className="info spacing">
      <h1 className="Layout">Layout</h1>
      <h4 className="h4">SPACING</h4>
      <Typography variant="body">
        Baseline variables for 8px spacing 4px added as it can see use from
        time to time when dealing with buttons and / or icons 12px added as it
        can see use from time to time when dealing with buttons and / or icons
      </Typography>
      <Grid
        grid={4}
        landscape={3}
        portrait={2}
        mobile={1}
        gap={16}
        className="spacingGrid"
        addClass="spacingGrid"
      >
        <SpaceItem>
          <div className="width4" />
          <Code>$space-4: rem(4px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-4');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>
        <SpaceItem>
          <div className="width8" />
          <Code>$space-8: rem(8px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-8');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>
        <SpaceItem>
          <div className="width12" />
          <Code>$space-12: rem(12px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-12');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>
        <SpaceItem>
          <div className="width16" />
          <Code>$space-16: rem(16px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-16');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>
        <SpaceItem>
          <div className="width24" />
          <Code>$space-24: rem(24px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-24');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>
        <SpaceItem>
          <div className="width32" />
          <Code>$space-32: rem(32px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-32');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>

        <SpaceItem>
          <div className="width40" />
          <Code>$space-40: rem(40px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-40');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>
        <SpaceItem>
          <div className="width48" />
          <Code>$space-48: rem(48px);</Code>
          <Typography
            variant="body"
            onClick={() => {
              navigator.clipboard.writeText('$space-48');
            }}
          >
            Copy to clipboard
          </Typography>
        </SpaceItem>
      </Grid>
    </section>
    <section className="info gridSystem">
      <h4 className="h4">GRID SYSTEM</h4>
      <Typography variant="body">
        Our Grid is a 12 column grid sitewide. Can be customized by the
        following props:
      </Typography>
      <section className="props">
        <Grid
          grid={2}
          landscape={2}
          portrait={2}
          mobile={1}
          gap={16}
        >
          <div className="info">
            <h4 className="h4">GRID:</h4>
            <Typography variant="body">
              Columns Value indicates number of desired columns in one row.
              Ex: 3 means you want 3 columns in a row, each spanning 4/12 grid
              columns
            </Typography>
            <h4 className="h4">LANDSCAPE:</h4>
            <Typography variant="body">
              Value indicicates number of desired columns in one row
              $mq-tablet-l: &quot;(max-width: 1024px)&quot;;
            </Typography>
            <h4 className="h4">PORTRAIT:</h4>
            <Typography variant="body">
              This represents a tablet in portrait mode This ONLY renders at
              EXACTLY 768px wide. Nothing smaller, nothing wider. Value
              indicicates number of desired columns in one row
            </Typography>
            <h4 className="h4">MOBILE:</h4>
            <Typography variant="body">
              Media : mobile $mq-mobile: &quot;(max-width: 767px)&quot;; easy
              way to target phones Value indicicates number of desired columns
              in one row
            </Typography>
            <h4 className="h4">GAP:</h4>
            <Typography variant="body">
              Value indicicates number of pixels between columns Rows always
              have 0 gap
            </Typography>
          </div>
          <div className="code">
            <Code>{gridCode}</Code>
          </div>
        </Grid>
      </section>
    </section>
  </>
);

Code.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

SpaceItem.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};
