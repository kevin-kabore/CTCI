/**
 * Stack of Plates
 *
 * Imagine a (literal) stack of plates.  If the stack gets too high, it might topple. Therefore, 
 * in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several  
 * stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push()
 * and setOfStacks.pop() should behave identically to a single stack. (that is, pop() should return 
 * the same values as it would if there were just a single stack).
 * 
 * FOLLOW UP: Implement a function popAt(index) which performs a pop operation on a specific sub-stack.
 * 
 */


class SetOfStacks {
    constructor(capacity) {
        this.capacity = capacity;
        this.stacks = [];
        this.numOfStacks = this.stacks.length;
    }

    push(val) {
        let lastStack = this.getLastStack();
        if(this.numOfStacks === 0 || lastStack.size === this.capacity) { // must create new stack
            let newStack = new Stack();
            newStack.push(val);
            
            this.stacks.push(newStack);
        } else { // push to top of last stack
            lastStack.push(val);
        }
    }

    pop() {
        let lastStack = this.getLastStack();
        
        if(lastStack === null || this.numOfStacks === 0) return null;

        let val = lastStack.pop();

        if(lastStack.size === 0) this.stacks.pop();

        return val;
    }

    getLastStack() {
        return this.stacks[this.numOfStacks - 1];
    }

    popAt(index) {
        return leftShift(index, true);
    }

    leftShift(index, removeTop) {
        if(index >= this.stacks.length) return null;

        let stack = this.stacks[index],
            removedItem;
        if(removeTop) {
            removedItem = stack.pop();
        } else {
            removedItem = stack.removeBottom();
        }

        if(stack.size === 0){
            this.stacks.splice(index, 1);
        } else if (this.stacks.length > index + 1) {
            let v = this.leftShift(index + 1, false);
            stack.push(v);
        }

        return removedItem;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);
        
        if(!this.top || this.size === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            this.join(newNode, this.top);
            this.top = newNode;
        }
        
        this.size++;
        return this;
    }

    pop() {
        if(!this.top) return null;
        
        let val = this.top.val;
        
        if (this.top === this.bottom) {
            this.bottom = null;
        } 
        
        this.top = this.top.below;
        this.size--;
        return val;
    }

    join(topNode, bottomNode) {
        if(bottomNode !== null ) bottomNode.above = topNode;
        if(topNode !== null) topNode.below = bottomNode;
    }

    removeBottom() {
        let val = this.bottom.val;
        this.bottom = this.bottom.above;
        
        if(this.bottom) {
            this.bottom.below = null;
        }
        this.size--;

        return val;
    }
}


class StackNode {
    constructor(val) {
        this.val = val;
        this.above = null;
        this.below = null;
    }
}
