/* eslint-disable no-console */

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

//we start with an empty 1st node, represented by null and it indicates the top of the stack
class Stack {
    constructor(){
        this.top = null;
    }

    //the time complexity of inserting on a stack is constant, O(1).
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if(this.top === null) {
            this.top = new _Node(data, null);
            return;
        }
        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    //the time complexity of inserting on a stack is constant, O(1).
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        if(!node) {
            return 'empty';
        } 
        this.top = node.next;
        return node.data;
    }
}

function peek(list){
    if(list) {
        return list.top.data;
    } else {
        return 'no record';
    }
}

function isEmpty(list){
    if(!list) {
        return true;
    }else {
        return false;
    }
}

function display(list) {
    let currNode = list.top;
    let str=[];

   while(currNode !==null) {
       str.unshift(currNode.data);
       currNode = currNode.next;
   }
    console.log(str);
    return str;
}

function is_palindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
 
   let stack = new Stack();
    let result = '';
   for(let i=0; i<str.length; i++){
       stack.push(str[i]);
   }
   
   while(stack.top) {
    result += stack.pop();
    console.log('result' +result);
   }

   if(result === str){
       return true;
   }
   return false;
}

function parentheses(str){
    let stack = new Stack();

    for(let i=0; i<str.length; i++){
        stack.push(str[i]);
    }

    let leftCnt = 0;
    let rightCnt = 0;

    while(stack.top) {
        let check= stack.pop();

        if(check === '(') {
            leftCnt++;
        }
        if(check ===')') {
            rightCnt++;
        }
    }
    console.log('left' + leftCnt + 'right' + rightCnt );

    if(leftCnt > rightCnt) {
        return `You are missing ${leftCnt - rightCnt} )`;
    } 
    if(rightCnt > leftCnt) {
        return `You are missing ${rightCnt - leftCnt} (`;
    }

}

function main(){
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    //2. Useful methods for a stack
    // console.log(peek(starTrek));
    // console.log(isEmpty(starTrek)); 
    //display(starTrek); 
    starTrek.pop('');
    starTrek.pop('');
    // display(starTrek); 
    // console.log(starTrek);

    //3. Check for palindromes using a stack
    // console.log(is_palindrome('dad'));
    // console.log(is_palindrome("A man, a plan, a canal: Panama"));
    // console.log(is_palindrome("1001"));
    // console.log(is_palindrome("Tauhida"));

    //4. Matching parentheses in an expression
    console.log(parentheses('te(s)t[in[g]'));
}

main();

module.exports = {
    _Node,
    Stack
};