class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }
    //complexity of inserting in a queue is constant, O(1)
    enqueue(data) {
        const node = new _Node(data);

        if(this.first === null) {
            this.first = node;
        }
        if(this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    //complexity of inserting in a queue is constant, O(1)
    //we can also use shift() method to implement dequeue
    dequeue() {
        //if the queue is empty, there is nothing to return
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if(node === this.last) {
            this.last = null;
        }
        return node.value;
    }

}
function main(){
let starTrek = new _Node();

starTrek.enqueue('Kirk');
// starTrek.push('Spock');
// starTrek.push('McCoy');
// starTrek.push('Scotty');


// starTrek.push();
// starTrek.displayStack();
}
main();

module.exports = {
    _Node,
    Queue
};