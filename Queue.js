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

function peek(queue){
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

//#9
function dancer(queue) {
    let fQueue = new Queue();
    let mQueue = new Queue();

    if(!isEmpty(queue)) {
        
        // let g = queue.value.charAt(0);
        console.log('not empty');
    }
    
}

//#10
function getRandomInt(min, max) {
    min = Math.ceil(min);
    min = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function ophidian(queue){
    while(queue.first !==null) {
        let chance = getRandomInt(0, 101);
        if(chance <= 25) {
            console.log(`${peek(queue)}'s paperwork wasn't correct and they got sent to the back of the line.`);
            let temp = queue.dequeue();
            queue.enqueue(temp);
        }else {
            console.log(`${peek(queue)}'s all done with their business at the Ophidian Bank. Bye ${peek(queue)}!`);
            queue.dequeue();
        }
    }
}

function maintwo(){
let people = new Queue();

people.enqueue('Jane');
people.enqueue('Frank');
people.enqueue('John');
people.enqueue('Sherlock');
ophidian(people);
}
maintwo();


// function main(){
// let starTrek = new Queue();

// starTrek.enqueue('F Jane');
// dancer(starTrek);
// // displayQueue(starTrek);
// // // starTrek.enqueue('Kirk');
// // // starTrek.enqueue('Spock');
// // // displayQueue(starTrek);
// // // starTrek.enqueue('Uhura');
// // // starTrek.enqueue('Sulu');
// // // starTrek.enqueue('Checkov');
// // // console.log(starTrek);

// // // console.log(peek(starTrek));
// // // console.log(isEmpty(starTrek));

// // // displayQueue(starTrek);

// // //removing Spock
// // // starTrek.dequeue();
// // // starTrek.dequeue();
// // // displayQueue(starTrek);

// }
// main();



module.exports = {
    _Node,
    Queue
};