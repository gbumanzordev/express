const path = require('path');

console.log(path.sep);
console.log(path.delimiter);
console.log(path.basename('test.txt'));
console.log(path.dirname('test.txt'));
console.log(path.extname('test.txt'));
console.log(path.isAbsolute('/test.txt'));

console.log(path.parse('./test.txt'));
console.log(path.resolve('test.txt'));
