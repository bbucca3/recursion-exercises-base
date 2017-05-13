const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  return _.filter(flattenTreeToArray(root), element => !!element.id && element.id === id)[0] || null;
};

const getElementsByClassName = function(root, className) {
  // Your code here
  return _.filter(flattenTreeToArray(root), element => !!element.className && element.className.includes(className));
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  return _.filter(flattenTreeToArray(root), element => !!element.tagName && element.tagName.includes(tagName));
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
