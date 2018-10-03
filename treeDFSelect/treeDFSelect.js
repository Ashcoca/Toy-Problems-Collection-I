/**
  *
  * Implement a `DFSelect` method on this Tree class.
  *
  * DFSelect accepts a filter function, calls that function on each of the nodes
  * in Depth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.DFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 5, 3, 7]
  *
  *   root1.DFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

 /*
Strategy:
I: Tree, value, how deep to search
O: Flat array of nodes that pass the filter test
C: None
E: Empty tree?

1.  We could create a recursive function that searches for the elements that are n levels deeps
    a.  Do we need to increment the depth as we recurse? Or decremenent?
2.  We then iterate over the children nodes and if they pass the test, we'll push them to our output
    array and return that
3.  Is it really this simple? Let's find out!

 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};


Tree.prototype.DFSelect = function(filter) {
  var filtered = [];
  //we'll need to take in a node
  var helper = function(node, depth) {
    //if the filter passes, push it to the output
    if (filter(node.value)) {
      filtered.push(node.value)
    }
    //else we'll continue recursing
    //it shouldn't continue recursing if there aren't any children
    for (var i = 0; i < node.children.length; i++) {
        //add depth in case the filter is like the one in the example checking for depth to return
        helper(node.children[i], depth + 1)
    }
  }
    //initial call of helper on tree that is to the left of DFSelect function
    helper(this, 0)
    //return results
    return filtered;
};



/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
