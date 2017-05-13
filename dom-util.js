
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  let childNode = node.childNodes;
  if (childNode.length > 0) {
    childNode.forEach(element => visitAllNodes(element, callback));
  }
  return callback(node);
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  let flatArray = [];
  visitAllNodes(node, element => flatArray.push(element));
  return flatArray;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};