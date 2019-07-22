/*
    Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

    EXAMPLE

    Input: the node c form the linked list: a->b->c->d->e->f
    Result: Nothing is returned, but the new linked list looks like: a->b->d->e->f
*/

function deleteNode(node) {
    if(node === null || node.next === null) {
        return false;
    }

    node.data = node.next.data;
    node.next = node.next.next;
    return true;
}