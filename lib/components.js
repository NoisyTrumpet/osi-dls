'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/* TypographyDetails returns 2 props: 'html_tag' and 'className' */

var TypographyDetails = function TypographyDetails(defaultTag, className) {
  return {
    defaultTag: defaultTag,
    className: classnames('typography', className)
  };
};
/*
TypographyComponents is a Key / Value pair
- Key: a valid type of <Typography />
- Value: a TypographyDetails object (defined above)
*/


var TypographyComponents = {
  'headline-1': TypographyDetails('h1', 'typography-headline typography-headline-1'),
  'headline-2': TypographyDetails('h2', 'typography-headline typography-headline-2'),
  'headline-3': TypographyDetails('h3', 'typography-headline typography-headline-3'),
  'headline-4': TypographyDetails('h4', 'typography-headline typography-headline-4'),
  'headline-5': TypographyDetails('h5', 'typography-headline typography-headline-5'),
  'headline-6': TypographyDetails('h6', 'typography-headline typography-headline-6'),
  'price-unit': TypographyDetails('span', 'typography-price-unit'),
  'price-unit-strikethrough': TypographyDetails('span', 'typography-price-unit-strikethrough'),
  'price-sale': TypographyDetails('span', 'typography-price-sale'),
  cta: TypographyDetails('span', 'typography-cta'),
  'cta-tertiary': TypographyDetails('span', 'typography-cta-tertiary'),
  subtitle: TypographyDetails('span', 'typography-subtitle'),
  'field-label': TypographyDetails('span', 'typography-field-label'),
  body: TypographyDetails('span', 'typography-body'),
  'body-medium': TypographyDetails('span', 'typography-body typography-body-medium'),
  eyebrow: TypographyDetails('span', 'typography-eyebrow'),
  'text-link': TypographyDetails('span', 'typography-text-link'),
  'input-text': TypographyDetails('span', 'typography-input-text'),
  caption: TypographyDetails('span', 'typography-caption'),
  helper: TypographyDetails('span', 'typography-helper'),
  breadcrumb: TypographyDetails('span', 'typography-breadcrumb'),
  srt: TypographyDetails('span', 'screen-reader-text'),
  licensing: TypographyDetails('span', 'typography-licensing'),
  subtext: TypographyDetails('span', 'typography-subtext')
};

/**
 * Utilize `Typography` to present text
 */

var Typography = function Typography(_ref) {
  var addClass = _ref.addClass,
      variant = _ref.variant,
      htmlTagOverride = _ref.htmlTagOverride,
      color = _ref.color,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["addClass", "variant", "htmlTagOverride", "color", "children"]);

  if (!(variant in TypographyComponents)) {
    return null;
  }

  var _TypographyComponents = TypographyComponents[variant],
      defaultTag = _TypographyComponents.defaultTag,
      className = _TypographyComponents.className;

  var colorClass = _defineProperty({}, "color-".concat(color), color);

  var newProps = _objectSpread2({
    className: classnames(className, colorClass, addClass)
  }, rest);

  var tag = htmlTagOverride || defaultTag;
  return /*#__PURE__*/React.createElement(tag, newProps, children);
};

Typography.variants = Object.keys(TypographyComponents);
Typography.propTypes = {
  /** Variant determines the styling for the component */
  variant: PropTypes.oneOf(['headline-1', 'headline-2', 'headline-3', 'headline-4', 'headline-5', 'headline-6', 'price-unit', 'price-unit-strikethrough', 'price-sale', 'cta', 'cta-tertiary', 'subtitle', 'field-label', 'body', 'body-medium', 'eyebrow', 'text-link', 'input-text', 'caption', 'helper', 'breadcrumb', 'srt', 'licensing', 'subtext']).isRequired,

  /** The content of the component */
  children: PropTypes.node,

  /** Overides the default tag that the component is rendered as */
  htmlTagOverride: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'address', 'div']),

  /** Color provides the component with a class name that affects the color of text */
  color: PropTypes.string,

  /** addClass appends a string to the component's className prop */
  addClass: PropTypes.string
};

var Badge = function Badge(_ref) {
  var count = _ref.count,
      color = _ref.color;
  var badgeClasses = classnames('badge', "background-color-".concat(color));

  if (!count || count < 1) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: badgeClasses,
    color: color
  }, /*#__PURE__*/React.createElement(Typography, {
    variant: "caption",
    color: "brand-white"
  }, count));
};

Badge.defaultProps = {
  color: 'primary'
};
Badge.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      color = _ref.color,
      size = _ref.size,
      error = _ref.error,
      disabled = _ref.disabled,
      addClass = _ref.addClass,
      badgeCount = _ref.badgeCount,
      badgeColor = _ref.badgeColor,
      testId = _ref.testId;
  var classes = classnames('icon', "icon-".concat(name), color ? "icon-".concat(color) : '', "icon-".concat(size), error ? 'error' : '', disabled ? 'disabled' : '', badgeCount ? 'badge' : '', addClass);

  if (badgeCount && badgeCount > 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: "icon-badge"
    }, /*#__PURE__*/React.createElement("span", {
      className: classes,
      "aria-hidden": "true",
      "data-testid": testId
    }, /*#__PURE__*/React.createElement(Badge, {
      count: badgeCount,
      color: badgeColor
    })));
  }

  return /*#__PURE__*/React.createElement("span", {
    className: classes,
    "aria-hidden": "true",
    "data-testid": testId
  });
};

Icon.defaultProps = {
  size: 24,
  badgeColor: 'primary',
  testId: 'icon'
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  addClass: PropTypes.string,
  // Badge props:
  badgeCount: PropTypes.number,
  badgeColor: PropTypes.string,
  testId: PropTypes.string
};

var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var type = _ref.type,
      mode = _ref.mode,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      color = _ref.color,
      children = _ref.children,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      click = _ref.click,
      addClass = _ref.addClass,
      typoVariant = _ref.typoVariant,
      ariaControls = _ref.ariaControls,
      ariaSelected = _ref.ariaSelected,
      role = _ref.role,
      id = _ref.id,
      onKeyDown = _ref.onKeyDown,
      onKeyUp = _ref.onKeyUp,
      tabIndex = _ref.tabIndex,
      testId = _ref.testId;
  var classes = classnames('btn', "btn-".concat(mode), (iconLeft || iconRight) && 'has-icon', {
    'has-icon-left': iconLeft,
    'has-icon-right': iconRight
  }, addClass);
  var btnDetails = {
    primary: {
      iconSize: 20,
      color: color || 'brand-white',
      typoVariant: typoVariant || 'cta'
    },
    secondary: {
      iconSize: 20,
      color: color || 'primary',
      typoVariant: typoVariant || 'cta'
    },
    tertiary: {
      iconSize: 10,
      color: color || 'primary',
      typoVariant: typoVariant || 'cta-tertiary'
    },
    'quick-action-deactivated': {
      iconSize: 10,
      color: color || 'primary',
      typoVariant: typoVariant || 'cta-tertiary'
    },
    'quick-action-activated': {
      iconSize: 10,
      color: color || 'primary',
      typoVariant: typoVariant || 'cta-tertiary'
    },
    'text-link': {
      iconSize: 14,
      color: color || 'accentB',
      typoVariant: typoVariant || 'text-link'
    },
    'text-link-2': {
      iconSize: 12,
      color: color || 'primary',
      typoVariant: typoVariant || 'caption'
    },
    custom: {
      iconSize: 20,
      color: color || 'brand-black',
      typoVariant: typoVariant || 'body'
    }
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React.createElement("button", {
      type: type,
      onClick: click,
      className: classes,
      disabled: disabled,
      ref: ref,
      onBlur: onBlur,
      onFocus: onFocus,
      "aria-controls": ariaControls,
      "aria-selected": ariaSelected,
      role: role,
      id: id,
      "data-testid": testId,
      tabIndex: tabIndex,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp
    }, iconLeft && /*#__PURE__*/React.createElement(Icon, {
      name: iconLeft,
      color: btnDetails[mode].color,
      size: btnDetails[mode].iconSize,
      disabled: disabled,
      addClass: "icon-left"
    }), /*#__PURE__*/React.createElement(Typography, {
      variant: btnDetails[mode].typoVariant,
      color: btnDetails[mode].color
    }, children), iconRight && /*#__PURE__*/React.createElement(Icon, {
      name: iconRight,
      color: btnDetails[mode].color,
      size: btnDetails[mode].iconSize,
      disabled: disabled,
      addClass: "icon-right"
    }))
  );
});
Button.defaultProps = {
  type: 'button',
  mode: 'primary',
  disabled: false,
  color: '',
  iconLeft: '',
  iconRight: ''
};
Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quick-action-deactivated', 'quick-action-activated', 'text-link', 'text-link-2', 'custom']),
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  click: PropTypes.func,
  addClass: PropTypes.string,
  typoVariant: PropTypes.oneOf(['headline-1', 'headline-2', 'headline-3', 'headline-4', 'headline-5', 'headline-6', 'price-unit', 'price-unit-strikethrough', 'price-sale', 'cta', 'cta-tertiary', 'subtitle', 'field-label', 'body', 'body-medium', 'eyebrow', 'text-link', 'input-text', 'caption', 'helper', 'breadcrumb', 'srt', 'licensing', 'subtext']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ariaControls: PropTypes.string,
  ariaSelected: PropTypes.string,
  tabIndex: PropTypes.string,
  role: PropTypes.string,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  id: PropTypes.string,
  testId: PropTypes.string
};

exports.Badge = Badge;
exports.Button = Button;
exports.Icon = Icon;
exports.Typography = Typography;
