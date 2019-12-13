class _Node {
    constructor(value,prev) {
        this.value = value;
        this.next = null;
        this.prev = prev;
    }
}

class QueueDLL {
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if(this.first === null) {
            this.first = node;
            node.prev = null;
        }
        if(this.last) {
            this.last.next = node;
            node.prev = this.last;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

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

function peek(queue){
    if(!queue.first) return 'Queue is empty';
    return queue.first.value;
}

function isEmpty(queue){
    if(!queue.first) {
        return true;
    }else {
        return false;
    }
}

function displayQueue(queue) {
    if(!queue.first) return 'Queue is empty';

    let currNode = queue.first;

    while(currNode) {
        console.log(currNode.value);
        currNode = currNode.next;
    }

}

function main(){
    let starTrek = new QueueDLL();
    
    starTrek.enqueue('Kirk');
    starTrek.enqueue('Spock');
    starTrek.enqueue('Uhura');
    starTrek.enqueue('Sulu');
    starTrek.enqueue('Checkov');

    //removing 'Spock'
    starTrek.dequeue();
    starTrek.dequeue();
    displayQueue(starTrek);

    //#7 Uhura will be the first after dequeuing

    // console.log(starTrek);
    
    // console.log(peek(starTrek));
    // console.log(isEmpty(starTrek));
    
    // displayQueue(starTrek);
    
    //removing Spock
    // starTrek.dequeue();
    // starTrek.dequeue();
    // displayQueue(starTrek);
    
    
    }
    main();
    
    module.exports = {
        _Node,
        QueueDLL
    };