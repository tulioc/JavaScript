// Callback
const getData = (callback) => {
  setTimeout(() => {
    callback(undefined, 'Deu bom! - Callback');
  }, 2000);
}

getData((err, data) => {
  if(err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// Promises
const myPromise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve('Deu bom! - Promise');
  }, 2000)
});


myPromise.then((data) => {
  console.log(data)
}, (err) => {
  console.log(err);
});
