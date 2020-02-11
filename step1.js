const fs = require('fs');
const argv = process.argv; // shows array of each command line argument/keyword

function cat(path) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      console.log(`Error reading ${path}: `);
      console.log(`   ${err}`);
      process.exit(1);
    }
    console.log(data);
  })
}

cat(argv[2]);
