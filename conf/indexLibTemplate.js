require('./index.css');
// require('./widgets/index.css');
// require('./ContentComponents/index.css');

var components = require('./components.js');
// var widgets = require('./widgets/index.js');
// var contentComponents = require('./ContentComponents/index.js');

Object.keys(components).map(
  (component) => (exports[component] = components[component]),
);
// Object.keys(widgets).map((widget) => (exports[widget] = widgets[widget]));
// Object.keys(contentComponents).map(
//   (contentComponent) =>
//     (exports[contentComponent] = contentComponents[contentComponent]),
// );
