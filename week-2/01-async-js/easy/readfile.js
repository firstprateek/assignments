const fs = require('node:fs');

fs.readFile('/Users/padi/Documents/projects/harkirat/assignments/assignments/week-2/01-async-js/easy/3-read-from-file.md', 'utf8', (err, data) => {
    if (err) {
        console.log('error in reading file: ', err);
        return;
    }

    console.log(data);
});

for (let i = 0; i < 10000000000; i++) {
}
console.log(10000000000);
