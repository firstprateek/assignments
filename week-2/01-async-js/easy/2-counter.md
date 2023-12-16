## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

class Counter {
    constructor (start = 0, duration = 1000) {
        this.count = start
        this.duration = duration;
        this.counter = null;
    }

    start () {
        this.counter = this.countFcn();
    }

    countFcn () {
        return setTimeout(
            () => { 
                console.log(++this.count); 
                this.counter = this.countFcn(); 
            }, 
            this.duration
        );
    }

    stop () {
        clearInterval(this.counter);
    }
}







































































(Hint: setTimeout)