/*Find the height of a binary tree represented by the parent array.
Given an array representing the parent-child relationship in a binary tree, ﬁnd the tree’s height without building it.
The parent-child relationship is deﬁned by (A[i], i) for every index i in array A. The root node’s value will be i if -1 is present at index i in the array.

The depth of a “node” is the total number of edges from the node to the tree’s root node. The root is the only node whose depth is 0.

The height of a “node” is the total number of edges on the longest path from the node to a leaf.
The height of a “tree” would be the height of its root node, or equivalently, the depth of its deepest node. A leaf node will have a height of 0.*/

function fillDepth(parent, i, depth) {
  if (parent[i] == -1) {
    depth[i] = 1;
    return;
  }
  depth[i] = depth[parent[i]] + 1;
}
function findHeight(parent) {
  let depth = new Array(parent.length).fill(0);  
  for (let i = 0; i < parent.length; i++) {
    fillDepth(parent, i, depth);
  }  
  return Math.max(...depth)
}
console.log("Height is " + findHeight([-1, 0, 0, 1, 2, 2, 4, 4]));

//

const findDepth = (parent, i) => {
  if (parent[i] === -1) {
    return 1;
  }
  return 1 + findDepth(parent, parent[i]);
};
const findHeight = (parent) => {
  let height = 1;
  for (let i = 0; i < parent.length; i++) {
    height = Math.max(height, findDepth(parent, i));
  }
  return height;
};
console.log(findHeight([1, 5, 5, 2, 2, -1, 3]));