/*
    Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between left and right partitions.
*/

/*
    Approach: 
        - Create two linked lists. 
        - Iterate through, and push to the appropriate list
        - At end, if no left partition, return right partition
        - Otherwise, join left and right list. return left partition (will link to the right one).

    Second option, one list only: 
        - Iterate through
            - if less than x. Add to the head, move head;
            - If >= to x. Add to tail
*/

function partition(head, x) {
    let beforeHead = null,
        beforeTail = null,
        afterHead = null,
        afterTail = null,
        currentNode = head;

    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = null;

        if(currentNode.data < x) {
            if(!beforeHead) {
                beforeHead = currentNode;
                beforeTail = beforeHead;
            } else {
                beforeTail.next = currentNode;
                beforeTail = currentNode;
            }
        } else {
            if(!afterHead) {
                afterHead = currentNode;
                afterTail = afterHead;
            } else {
                afterTail.next = currentNode;
                afterTail = currentNode;
            }
        }

        currentNode = nextNode;
    }

    if (!beforeHead) {
        return afterHead;
    }
    beforeTail.next = afterHead;
    return beforeHead;
}


function partitionInPlace(node, x) {
    let head = node,
        tail = node;

    while(node) {
        let next = node.next;
        if(node.data < x) {
            // Insert node at head
            node.next = head;
            head = node;
        } else {
            // insert node at tail
            tail.next = node;
            tail = nonde;
        }
        node = next;
    }
    tail.next = null;
    return head;

}