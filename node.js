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

function buildTree (array) {
    
    if (array.length === 0) return null;
    if (array.length === 1) return array[0];

    let mid = Math.floor(array.length / 2);
    let root = new TreeNode(array[mid]);
    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);

    root.left = getRoot(left);
    root.right = getRoot(right)

    return root;
}

const newArray = getRoot(cleanArray)

function insertNode (root, value) {
    
    let newNode = new TreeNode(value);

    if (root === null) return newNode;
    else {
        if (root.data > value) root.left = insertNode(root.left, value);
        else if (root.data < value) root.right = insertNode(root.right, value);
    }

    return root;
}

function removeNode (root, value) {

    if (root === null) return null;
    
    if (value < root.data) root.left = removeNode(root.left, value);
    else if (value > root.data) root.right = removeNode(root.right, value);
    else {
        if (root.data === value) value = null;
        if (root !== value) return root.data;
    
        if (root.left === null) return root.right
        if (root.left === null) return root.left

       root.data = minValue(root.right);

       root.right = removeNode(root.right, root.data)
    }
    return root;
}

function minValue (node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node.data;
}
