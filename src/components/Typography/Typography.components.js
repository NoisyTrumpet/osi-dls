import classNames from 'classnames';

/* TypographyDetails returns 2 props: 'html_tag' and 'className' */
const TypographyDetails = (defaultTag, className) => ({ defaultTag, className: classNames('typography', className) });

/*
TypographyComponents is a Key / Value pair
- Key: a valid type of <Typography />
- Value: a TypographyDetails object (defined above)
*/
const TypographyComponents = {
  'headline-1':
    TypographyDetails('h1', 'typography-headline typography-headline-1'),
  'headline-2':
    TypographyDetails('h2', 'typography-headline typography-headline-2'),
  'headline-3':
    TypographyDetails('h3', 'typography-headline typography-headline-3'),
  'headline-4':
    TypographyDetails('h4', 'typography-headline typography-headline-4'),
  'headline-5':
    TypographyDetails('h5', 'typography-headline typography-headline-5'),
  'headline-6':
    TypographyDetails('h6', 'typography-headline typography-headline-6'),
  'price-unit':
    TypographyDetails('span', 'typography-price-unit'),
  'price-unit-strikethrough':
    TypographyDetails('span', 'typography-price-unit-strikethrough'),
  'price-sale':
    TypographyDetails('span', 'typography-price-sale'),
  cta:
    TypographyDetails('span', 'typography-cta'),
  'cta-tertiary':
    TypographyDetails('span', 'typography-cta-tertiary'),
  subtitle:
    TypographyDetails('span', 'typography-subtitle'),
  'field-label':
    TypographyDetails('span', 'typography-field-label'),
  body:
    TypographyDetails('span', 'typography-body'),
  'body-medium':
    TypographyDetails('span', 'typography-body typography-body-medium'),
  eyebrow:
    TypographyDetails('span', 'typography-eyebrow'),
  'text-link':
    TypographyDetails('span', 'typography-text-link'),
  'input-text':
    TypographyDetails('span', 'typography-input-text'),
  caption:
    TypographyDetails('span', 'typography-caption'),
  helper:
    TypographyDetails('span', 'typography-helper'),
  breadcrumb:
    TypographyDetails('span', 'typography-breadcrumb'),
  srt:
    TypographyDetails('span', 'screen-reader-text'),
  licensing:
    TypographyDetails('span', 'typography-licensing'),
  subtext:
    TypographyDetails('span', 'typography-subtext'),
};

export default TypographyComponents;
