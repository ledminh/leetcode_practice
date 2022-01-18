/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return null;
    else if(!list1) return list2;
    else if(!list2) return list1;


    let head, curr, next1, next2;

    if(list1.val < list2.val){
        head = list1;
        next1 = list1.next;
        next2 = list2;
    }
    else {
        head = list2;
        next1 = list1;
        next2 = list2.next;
    }

    curr = head;

    while(next1 || next2) {
        if(next1 && next2) {
            if(next1.val < next2.val){
                curr.next = next1;
                curr = next1;
                next1 = next1.next;
            }
            else {
                curr.next = next2;
                curr = next2;
                next2 = next2.next;
            }
        }
        else if(next1){
            curr.next = next1;
            curr = next1;
            next1 = next1.next;
        }
        else if(next2){
            curr.next = next2;
            curr = next2;
            next2 = next2.next;
        }
    }

    return head;
}

