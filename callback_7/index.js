const async = require('async');

// npm install async

async.parallel([
  function(callback) { simulateAPICall(callback); },
  function(callback) { simulateAPICall2(callback); },
], function(err, results) {
    if (err) {
        console.error(err); return;
    }
    console.log('Results:', results);
});

function simulateAPICall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = "From the API - 1";
        resolve(response);
      }, 2000); 
    });
}

function simulateAPICall2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const response = "From the API - 2";
        resolve(response);
      }, 1000); 
    });
}


async function main() {
    const result1 = await simulateAPICall();
    const result2 = await simulateAPICall2();

    console.log(result1, result2);
}
  
main();
  