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
    function branches (left, right) {

        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const root = new TreeNode(array[mid]);
    
        root.left = branches(left , mid - 1);
        root.right = branches(mid + 1, right);

        return root;
    }

    if (array.length === 0) return null;
    if (array.length === 1) return array[0];

    return branches(0, array.length -1)
}

const newBST = buildTree(cleanArray)

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

function findValue (root, value) {
    if (root === null) return false;
    if (root === value || root.data === value) return true;

    if (value < root.data) return findValue(root.left, value);
    else return findValue(root.right, value);
}

function height (root) {
    if (root === null) return -1;
    if (root.left === null || root.right === null) return 0;
    else {
        let leftHeight = height(root.left);
        let rightHeight = height(root.right);
        return maxheight(leftHeight, rightHeight) + 1;
    }
}

function maxheight (root1, root2) {
    if (root1 > root2) return root1;
    else return root2;
}

function depth (root) {
    if (root == null) return 0;

    let left = depth(root.left);
    let right = depth(root.right);

    return Math.max(left, right) + 1;
}

function levelOrder (root) {

    if (root === null) return [];

    let queue = [];
    let result = [];

    queue.push(root);

    while (queue.length !== 0) {
        let current = queue.shift();

        if (current !== null) {
            result.push(current.data)
    
            if (root.left !== null) {
                queue.push(current.left);
            }
            if (root.right !== null) {
                queue.push(current.right);
            }
        } else return queue
    }
    return result;
}

function inOrder (root) {
    let result = [];

    function traverse (node) {
        if (node === null) return;
        traverse(node.left);
        result.push(node.data);
        traverse(node.right);
    }
    traverse(root);
    return result;
}

function preOrder (root) {
    let result = [];

    function traverse (node) {
        if (node === null) return;
        result.push(node.data);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return result;
}

function postOrder (root) {
    let result = [];

    function traverse (node) {
        if (node === null) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.data);
    }
    traverse(root);
    return result;
}
