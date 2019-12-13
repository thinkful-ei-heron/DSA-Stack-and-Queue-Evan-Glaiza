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
    return list.top.data;
}

function isEmpty(list){
    if(!list.top) {
        return true;
    }else {
        return false;
    }
}

function display(list) {
    let currNode = list.top;

   while(currNode) {
       console.log(currNode.data);
       currNode = currNode.next;
   }
   return;
}

//#3
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

//#4
function parentheses(str){
    str = str.replace(/\s+/g, ''); //remove spaces
    let stack = new Stack();

    for(let i=0; i<str.length; i++){
        stack.push(str[i]);
    }

    let currNode = stack.top;

    let open = [];
    let close = [];
    let idx = 1;

    while(currNode) {
        if(currNode.data === '(') {
            open.push(idx);
        }
        if(currNode.data ===')') {
            close.push(idx);
        }
        currNode = currNode.next;
        idx++;
    }
    console.log('open: ' + open + 'close: ' + close );

    if(open.length > close.length) {
        return 'Unmatched closing parenthesis at index number' + open.pop();
    } else if( close.length > open.length) {
        return 'Unmatched closing parenthesis at index number' + close.pop();
    } else {
        return 'match';
    }


}

//#5 
function sort(list) {
 
    let sortStack = new Stack();

    while(!isEmpty(list)) {
        let x = list.pop();
        while(!isEmpty(sortStack) && x > peek(sortStack)) {
            list.push(sortStack.pop());
        }
        sortStack.push(x);
    }
    return display(sortStack);
}

class QueueMaker {
    constructor() {
        this.bucketA = new Stack();
        this.bucketB = new Stack();
    }
    enqueue(value) {
        this.bucketA.push(value);
    }
    show(){
        display(this.bucketA);
    }
    dequeue() {
        while(this.bucketA.top) {
            this.bucketB.push(this.bucketA.pop());
        }
        let getItem = this.bucketB.pop();
        while(this.bucketB.top){
            this.bucketA.push(this.bucketB.pop());
        }
        return getItem;
    }
    sortQueue(){
        while(this.bucketA.top) {
            if(isEmpty(this.bucketB)){
                this.bucketB.push(this.bucketA.pop());
            }
            let temp = this.bucketA.pop();
            if((peek(this.bucketB) > temp)){
                this.bucketB.push(temp);
            }
            else if(temp > peek(this.bucketA)){
                this.bucketB.push(this.bucketA.pop());
            }
            else if((peek(this.bucketB) < temp)) {
                this.bucketA.push(this.bucketB.pop());
                this.bucketB.push(temp);
                this.bucketB.push(this.bucketA.pop());
            }
        }
        display(this.bucketB);
    }
}

function main(){
    // let starTrek = new Stack();
    // starTrek.push('Kirk');
    // starTrek.push('Spock');
    // starTrek.push('McCoy');
    // starTrek.push('Scotty');

    //2. Useful methods for a stack
    // console.log(peek(starTrek));
    // console.log(isEmpty(starTrek)); 
    //display(starTrek); 
    //starTrek.pop('');
    //starTrek.pop('');
    // display(starTrek); 
    // console.log(starTrek);

    //3. Check for palindromes using a stack
    // console.log(is_palindrome('dad'));
    // console.log(is_palindrome("A man, a plan, a canal: Panama"));
    // console.log(is_palindrome("1001"));
    // console.log(is_palindrome("Tauhida"));

    //4. Matching parentheses in an expression
    // parentheses('(aa) (bb ) cc) '));

    //5.Sort stack
    // let origStack = new Stack();
    // origStack.push(2); //first
    // origStack.push(6);
    // origStack.push(3);
    // origStack.push(5); //last 
    // // display(origStack);
    // sort(origStack);

    let starTrek = new QueueMaker();
    starTrek.enqueue(1);
    starTrek.enqueue(4);
    starTrek.enqueue(2);
    starTrek.enqueue(6);
    starTrek.enqueue(3);
    // starTrek.dequeue();
    // starTrek.dequeue();
    starTrek.show();
    starTrek.sortQueue(starTrek);
    // console.log(starTrek);
    // starTrek.push('Spock');
    // starTrek.push('McCoy');
    // starTrek.push('Scotty');
}

main();

module.exports = {
    _Node,
    Stack
};