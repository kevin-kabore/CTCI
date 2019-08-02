/**
 * 
 * Implement a MyQueue class which implements a queue using two stacks.
 * 
 */

 class MyQueue {
     constructor(){
         this.pushStack = new Stack();
         this.popStack = new Stack();
         this.size = this.pushStack.size + this.popStack.size;
     }

     enqueue(val) {
         return this.pushStack.push(val);
     }

     shiftStacks() {
        while(this.pushStack.size > 0) {
            let val = this.pushStack.pop();
            this.popStack.push(val);
        }
     }

     dequeue() {
         if(this.popStack.size === 0 ) {
             this.shiftStacks();
             if (this.popStack.size === 0) throw new Error ('Empty Queue');
         }

         return this.popStack.pop();
     }
     peek() {
         this.shiftStacks();
         return this.popStack.peek();
     }
 }



 const queueViaStacks = new MyQueue();

queueViaStacks.enqueue(1);
queueViaStacks.enqueue(2);
queueViaStacks.enqueue(3);

queueViaStacks.dequeue(); // 4

let desc = 'dequeue #1',
    expected = 1,
    actual = queueViaStacks.dequeue(); // 1
asserEquals(expected, actual, desc);

desc = 'dequeue back to back',
expected = 2,
actual = queueViaStacks.dequeue(); // 2;
asserEquals(expected, actual, desc);

queueViaStacks.enqueue(4);

desc = 'dequeue after enqueue',
expected = 4,
actual = queueViaStacks.dequeue(); // 2;
asserEquals(expected, actual, desc);

desc = 'dequeue on empty stack';
const emptyDequeue = () => queueViaStacks.dequeue();

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`FAIL`);
    } catch(e) {
        console.log(`PASS`);
    }
}


function asserEquals(expected, actual, desc) {
    if (expected === actual) {
        console.log(`${desc} .... PASS`);
        console.log(`${actual} equals ${expected}`);
    } else {
        console.log(`${desc} .... FAIL`);
        console.log(`${actual} !=== expected`);
    }
}
