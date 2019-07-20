/* 
    write code to remove duplicates from an unsorted linked list.

    FOLLOW UP

    How would you solve this problem if a temporary buffer is not allowed?
*/
function removeDups(node) {
    let set = new Set(),
    prev = null;

    while(node) {
        if(set.has(node.data)) {
            prev.next = node.next;
        } else {
            set.add(node.data);
            prev = node;
        }
        node = node.next;
    }
}

// How would you solve this problem if a temporary buffer is not allowed?
// - Use a two runner technique, with runner checking all subsequent nodes
//   - this is O(n^2)

function removeDupsNoBuffer(list) {
    let current = list.head;

    while(current) {
        let runner = current;
        while(runner.next) {
            if (runner.next.data === current.data) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }
}