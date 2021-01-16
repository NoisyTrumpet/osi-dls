import React from 'react';
import PropTypes from 'prop-types';

import { Script } from '../Script';
import { canUseDOM } from '../../util';

const DataLayer = ({
  dataKey,
  dataValue,
  depth,
  dataObj,
  dataArray,
  domId,
}) => {
  const _ = require('lodash'); // eslint-disable-line
  let dlScript = "";

  if (canUseDOM()) {
    let path = depth ? `window.dataLayer.${depth}` : 'window.dataLayer';

    // Init th datalayer
    window.dataLayer = window.dataLayer || {};

    // Assign single value to Datalayer, or Push to Array
    if (dataKey !== undefined) {
      // If key or array already exists in Datalayer...
      if (_.has(window.dataLayer, dataKey) || _.find(window.dataLayer, dataKey)) { // eslint-disable-line
        path = depth ? `window.dataLayer.${depth}.${dataKey}` : `window.dataLayer.${dataKey}`;

        // Custom logic for promoBanners
        if (dataKey === "promoBanners") {
          dlScript = !window.dataLayer.promoBanners.includes(dataValue) ? `${path} = ${path} + " | " + "${dataValue}";` : '';
        } else {
          // If data is array of objects, push to array
          if (dataArray !== undefined) { // eslint-disable-line
            dlScript = `${path}.push(${dataArray});`;
          } else {
            // Reassign if key already exists
            dlScript = `${path} = "${dataValue}";`;
          }
        }
      } else {
        // If not, add new key/value pair to Datalayer
        const newObj = JSON.stringify({ [dataKey]: dataValue });
        dlScript = `Object.assign(${path}, ${newObj});`;
      }
    }

    // Add Object to Datalayer
    if (dataObj !== undefined) {
      let mergedObj = "";
      let firstKey = "";
      let parseDataObj = "";

      // Parse the analytics JSON
      try {
        parseDataObj = JSON.parse(dataObj);
      } catch (e) {
        // Catch if JSON is formatted incorrectly
        console.error(e);
      }

      // If first key already exists in Datalayer, merge
      if (_.has(window.dataLayer, Object.keys(parseDataObj)[0])) { // eslint-disable-line
        // Using lodash to deep merge our objects
        firstKey = Object.keys(parseDataObj)[0]; // eslint-disable-line
        mergedObj = JSON.stringify(_.merge({}, window.dataLayer[firstKey], parseDataObj[firstKey])); // eslint-disable-line
      }

      // Assign object with key to the Datalayer
      dlScript = `Object.assign(${firstKey ? `${path}.${firstKey}` : path}, ${mergedObj || dataObj});`;
    }
  }

  return (
    <>
      <Script type="text/javascript" text={dlScript} domId={domId} />
    </>
  );
};

DataLayer.defaultProps = {};

DataLayer.propTypes = {
  dataKey: PropTypes.string,
  dataValue: PropTypes.string,
  dataObj: PropTypes.string,
  dataArray: PropTypes.string,
  depth: PropTypes.string,
  domId: PropTypes.string,
};

export default DataLayer;