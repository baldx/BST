class node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class tree {
    constructor(root, array) {
        this.root = root;
        this.array = array;
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


function getRoot (array) {

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    return buildTree(getRoot(left), getRoot(right))

}

function buildTree (root, left = null, right = null) {
    if (root === null) return 'Provide an array';
    if (root === 1) return result.push(1);

    const result = [];

    let 
}


console.log(cleanArray);
console.log(buildTree(cleanArray));

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
  