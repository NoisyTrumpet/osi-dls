import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../Typography';
import { Icon } from '../Icon';
import AccordionContext from './Accordion.context';
import AccordionSectionPanel from './AccordionSectionPanel';

const AccordionSection = ({ link, children, panelId, titleID, title, titleVariant, titleColor }) => (
  <div className="accordion-section">
    <div className="accordion-section-title">
      {
        link
          ? (
            <a href={link} className="accordion-trigger accordion-category-link">
              <Typography variant={titleVariant} color={titleColor}>{title}</Typography>
              <Icon size={16} name="arrows-caretright-bold" />
            </a>
          )
          : (
            <button
              type="button"
              aria-expanded="false"
              className="accordion-trigger"
              aria-controls={panelId}
              id={titleID}
            >
              <AccordionContext.Consumer>
                {
                  (expandedAccordion) => (
                    <span className="accordion-title">
                      <Typography
                        variant={titleVariant}
                        color={titleColor}
                      >
                        {title}
                      </Typography>
                      <Icon size={16} name={expandedAccordion && (titleID === expandedAccordion.id) ? 'remove-bold' : 'add-bold'} />
                    </span>
                  )
                }
              </AccordionContext.Consumer>
            </button>
          )
      }
    </div>
    {
      !link // Render Panel when Section is not a link
      && (
        <AccordionSectionPanel panelId={panelId} titleID={titleID}>
          {children}
        </AccordionSectionPanel>
      )
    }
  </div>
);

AccordionSection.defaultProps = {
  titleVariant: 'headline-6',
};

AccordionSection.propTypes = {
  panelId: PropTypes.string.isRequired,
  titleID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  children: PropTypes.node,
};

export default AccordionSection;
