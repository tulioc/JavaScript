const getData = () => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', (e) => {
    const DONE = 4;
    if(e.target.readyState === DONE && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      resolve(data.puzzle);
    } else if (e.target.readyState === DONE) {
        reject('An error happend!');
    }
  });
  request.open('GET', 'http://puzzle.mead.io/puzzle');
  request.send();
});


getData().then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});
