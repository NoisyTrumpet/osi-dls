import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../../Typography';
import { Icon } from '../../Icon';
import { Input } from '../../FormFields/Input';
import { Fieldset } from '../../FormFields/Fieldset';
import './SegmentedControl.scss';

const SegmentedControl = ({ segments, defaultSelected, legend, domId, onChange, ...props }) => {
  const [selected, setSelected] = useState(defaultSelected);
  // useField passes name, placeholder, value, onChange and onBlur
  // For FieldSet Render Props
  const { name } = props;
  const onChangeHandler = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  // Map segments array to segment components
  const Items = segments.map((segment, index) => (
    <li className="segmented-control-item" key={segment.value}>
      <Input
        addClass="segmented-control-input"
        type="radio"
        value={segment.value}
        name={name}
        domId={segment.value}
        defaultChecked={segment.value === defaultSelected}
        onChange={(e) => { setSelected(index); onChangeHandler(e); }}
      />
      <label className="segmented-control-label" htmlFor={segment.value}>
        <Typography variant="srt">{segment.label}</Typography>
        <Icon name={segment.icon} />
      </label>
    </li>
  ));
  // Render SegmentControl
  return (
    <div test-id='segmented-control-test-id' className={`segmented-control-holder selected-${selected}`}>
      <Fieldset
        legend={legend}
        domId={domId}
        name={name}
      >
        <ul className="segmented-control">
          {Items}
        </ul>
      </Fieldset>
    </div>
  );
};
SegmentedControl.defaultProps = {
  defaultSelected: 0,
};
SegmentedControl.propTypes = {
  defaultSelected: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  domId: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  segments(props, propName, componentName) {
    const arrayLength = props[propName].length;
    if (arrayLength < 2 || arrayLength > 4) {
      return new Error(
        `Invalid length of prop \`${propName}\` supplied to`
        + ` \`${componentName}\`. Validation failed.`,
      );
    }
  },
};
export default SegmentedControl;