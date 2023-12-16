## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

class Counter {
    constructor (start = 0, duration = 1000) {
        this.count = start
        this.duration = duration;
        this.counter = null;
    }

    start () {
        this.counter = setInterval(() => { console.log(++this.count); }, this.duration);
    }

    stop () {
        clearInterval(this.counter);
    }
}
