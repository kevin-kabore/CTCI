/**
 * 
 *  Binary Search Tree
 * 
 *  - Insert: Avg/Best: O(logn) // increases by 1 every double nodes
 *      - recursive and iterative
 *  - Search/Find/Contains: Avg/Best: O(logn) // increases by 1 step every double n
 *      - worst case: O(n) every node is on the right (greater).
 * 
 *  - Tree Traversal / Search
 *      - Depth First Search: All children, before siblings (depth first)
 *          - inOrder traversal: left, node, right (lowest, middle, highest)
 *          - preOrder traversal: node, left, right (middle, lowest, highest)
 *          - postOrder traversal: right, node, left (highest, middle, lowest)
 * 
 */


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertIterative(val) {
        let newNode = new BinaryNode(val);

        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(current) {
            if (val == current.val) return undefined;

            if(current.val > val) {
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (current.val < val) {
                if(!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    insertRecursive(value) {
        let newNode = new BinaryNode(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        function recurse(node) {
            if(node.val === value) return undefined;

            if(node.val > value) {
                if(!node.left) {
                    node.left = newNode;
                    return this;
                } else {
                    recurse(node.left);
                }
            } else {
                if(!node.right) {
                    node.right = newNode;
                    return this;
                } else {
                    recurse(node.right);
                }
            }
        }
        recurse(this.root);
    }

    find(value) { // iterative
        if(!this.root) return false;

        let current = this.root,
            found = false;

        while(!found && current) {
            if(value < current.val) {
                current = current.left;
            } else if(value > current.val) {
                current = current.right;
            } else {
                found  = true;
            }
        }

        if(!found) return false;

        return current;
    }

    DFSInOrder() { // ascending: left, middle, right
        if(!this.root) return [];

        let data = [],
            current = this.root;

        function traverseInOrder(node, arr) {
            if(node.left) traverseInOrder(node.left, arr);
            arr.push(node.val);
            if(node.right) traverseInOrder(node.right, arr);
        }

        traverseInOrder(this.root, data);
        return data;
    }

    DFSPreOrder() { // mid, left, right
        if(!this.root) return [];

        let data = [],
            current = this.root;

        function traversePre(node, arr) {
            arr.push(node.val);
            if(node.left) traversePre(node.left, arr);
            if(node.right) traversePre(node.right, arr);
        }

        traversePre(current, data);
        return data;
    }

    DFSPost() { // right, node, left
        if(!this.root) return [];

        let data = [],
            current = this.root;

        function traversePost(node, arr) {
            if(node.right) traversePost(node.right, arr);
            arr.push(node.val)
            if(node.left) traversePost(node.left, arr);
        }

        traversePost(current, data);
        return data;
    }
}



 class BinaryNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

