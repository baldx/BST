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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(new tree(Math.round(array.length / 2), array));