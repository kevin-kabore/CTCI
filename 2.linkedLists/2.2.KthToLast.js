/* 
    
    Implement an algorithm to find the kth to last element of a singly linked list

*/

function kthToLast(head, k){
    if(head === null || k <= 0) {
        return undefined;
    }
    let idx = kthToLast(head.next, k) + 1;
    if(i === k) {
        console.log(head.data);
    }
    return idx;
}

function kthToLastV2(head, k){
    if(head === null || k <= 0) {
        return;
    } else if(k === 1) {
        console.log(head.data)
        kthToLastV2(head.next, k);
    } else {
        kthToLastV2(head.next, k-1);
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}