/*
    Stack Min: How would you diesign a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop, and min should all operate in O(1).


    Brute force: O(n). Have the StackMin class save a property called min. When pop(), if the val is not === min, loop through stack values and greedily choose new min. This is however not O(1) since it doesn't track the min efficiently at each state.

    One solution for keeping track at each state: Using nodes, that each have their own min property. At each push the node and the min between current val, and the min of the peek value (this.peek().min)

    BETTER SOLUTION: Tradeoff of space, but can use TWO STACKS. One stack for values, and one stack for min values at each state. See class MinStack;
*/

class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.size = 0;
    }
    push(val){
        let newNode = new StackNode(val);
        if(!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
        return this;
    }
    pop() {
        if(!this.top || this.size === 0) return null;
        let top = this.top;
        this.top = this.top.next
        this.size--;
        return top.val;
    }
    peek() {
        if(!this.top) return null;
        return this.top.val;
    }
}

class MinStack {
    constructor() {
        this.values = new Stack();
        this.mins = new Stack();
        this.size  = 0;
    }

    push(val) {
        if(!this.mins.peek() || val <= this.mins.peek()) this.mins.push(val);

        this.values.push(val);
        this.size++;
        return this;
    }

    pop() {
        let result = this.values.pop();
        this.size--;

        if(result === this.mins.peek()) this.mins.pop();

        return result;
    }

    min() {
        return this.mins.peek();
    }

    peek() {
        return this.values.peek();
    }
}

//          top
// ex stack: 10 > 1 > 7 > 3 > 5

let myMinStack = new MinStack();
myMinStack.push(5)
myMinStack.push(3)
myMinStack.push(7)
myMinStack.push(1)
myMinStack.push(10)