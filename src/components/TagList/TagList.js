import React from 'react';
import PropTypes from 'prop-types';
import { List } from '../List';
import { Button } from '../Button';
import { TextLink } from '../TextLink';
import './TagList.scss';

const selectVariant = (variant, url, target, rel, click, name) => {
  switch (variant) {
    case 'button':
      return (
        <Button mode="quick-action-deactivated" click={click}>
          {name}
        </Button>
      );
    case 'textlink':
      return (
        <TextLink
          title={name}
          to={url}
          defaultClassOverride="btn btn-quick-action-deactivated"
          typoVariant="cta-tertiary"
          target={target}
          rel={rel}
        />
      );
    default:
      return (
        <Button mode="quick-action-deactivated" click={click}>
          {name}
        </Button>
      );
  }
};

const TagList = ({ items, variant }) => (
  <List addClass="taglist" horizontal>
    {items.map(({ name, url, target, rel, click }) => (
      <List.Item key={name}>
        {selectVariant(variant, url, target, rel, click, name)}
      </List.Item>
    ))}
  </List>
);

TagList.defaultProps = {
  items: [],
  variant: 'textlink',
};

TagList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      target: PropTypes.string,
      rel: PropTypes.string,
      mode: PropTypes.string,
      click: PropTypes.func,
    }),
  ),
  variant: PropTypes.oneOf(['button', 'textlink']),
};

export default TagList;
