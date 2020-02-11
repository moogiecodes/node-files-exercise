const fs = require('fs');
const argv = process.argv; // shows array of each command line argument/keyword
const axios = require('axios');


function checkUrl(string) {
  try {
    new URL(string);
    return true;
  }
  catch (err) {
    // console.log(err);
    return false;
  }
}


function cat(path) {

  if (checkUrl(path)) {
    webCat(path);
  }
  else {
    fs.readFile(path, 'utf8', function (err, data) {

      if (err) {
        console.log(`Error reading ${path}: `);
        console.log(`   ${err}`);
        process.exit(1);
      }

      console.log(data);
    })
  }
}


async function webCat(url) {

  axios.get(url)
    .then(function (resp) {
      console.log(resp.data);
    })
    .catch(function (err) {
      console.log(`Error fetching ${url}: `);
      console.log(`   ${err}`);
    })
}


cat(argv[2]);
