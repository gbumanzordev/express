const fs = require('fs');

fs.readFile('test.txt', 'utf8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});

try {
  const data = fs.readFileSync('test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.log(err);
}
