type BinaryNode = {
  value: number;
  left?: BinaryNode;
  right?: BinaryNode;
};

function invertTree(node: BinaryNode): BinaryNode {
  if (!node.left || !node.right) return node;
  else
    return {
      value: node.value,
      left: invertTree(node.right),
      right: invertTree(node.left),
    };

  return node;
}

const tree: BinaryNode = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 },
  },
  right: {
    value: 3,
    left: { value: 6 },
    right: { value: 7 },
  },
};

console.log(invertTree(tree));
