/**
 * 
 *  Binary Search Tree
 * 
 *  - Insert: Avg/Best: O(logn) // increases by 1 every double nodes
 *      - recursive and iterative
 *  - Search/Find/Contains: Avg/Best: O(logn) // increases by 1 step every double n
 *      - worst case: O(n) every node is on the right (greater).
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
}



 class BinaryNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

