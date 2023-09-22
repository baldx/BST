class TreeNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]

function sortArray (arr) {

    if (arr.length === 0) return "Provide an array";
    if (arr.length === 1) return arr;


    let mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    return mergeArray(sortArray(left), sortArray(right))
}

function mergeArray (left, right) {
    const result = [];

    iL = 0;
    iR = 0;

    while (iL < left.length && iR < right.length) {
        if (left[iL] < right[iR]) {
            result.push(left[iL]);
            iL++;
        }
         else {
            result.push(right[iR]);
            iR++;
         }
    }

    while (iL < left.length) {
        result.push(left[iL]);
        iL++;
    }

    while (iR < right.length) {
        result.push(right[iR]);
        iR++;
    }

    return result;
}

function removeDupes (arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}

const cleanArray = sortArray(removeDupes(array))
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function getRoot (array) {
    
    if (array.length === 0) return "Array is empty";
    if (array.length === 1) return array[0];

    let mid = Math.floor(array.length / 2);
    let root = new TreeNode(array[mid]);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    root.left = getRoot(left);
    root.right = getRoot(right)

    return root;
}

console.log(getRoot(testArray));



function buildTree (root, left = null, right = null) {

    let result = [];
    let count;
    
    if (left === null && right === null) return [root];
    if (root === null) return;

    while (left < root) 

        if (root)
        //if root node contains left node append node to result
        //if root node contains right node append node to result
        //if root node contains none append result
        //increment count by 1
    

    return result;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  